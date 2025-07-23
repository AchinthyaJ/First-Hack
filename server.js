const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? false : ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "ws:", "wss:"]
        }
    }
}));

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Database connection
const connectDB = async () => {
    try {
        // For demo purposes, we'll use a simple in-memory storage
        // In production, replace with actual MongoDB connection:
        // await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected (using in-memory storage for demo)');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

// In-memory storage for demo (replace with actual database in production)
let users = [];
let problems = [];
let solutions = [];

// User Schema (for reference - would be MongoDB schema in production)
const userSchema = {
    id: String,
    username: String,
    email: String,
    password: String, // hashed
    createdAt: Date,
    lastLogin: Date
};

// Problem Schema
const problemSchema = {
    id: String,
    userId: String,
    title: String,
    description: String,
    category: String,
    priority: String,
    status: String, // 'open', 'in-progress', 'solved', 'closed'
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    solutions: [String] // solution IDs
};

// Solution Schema
const solutionSchema = {
    id: String,
    problemId: String,
    userId: String,
    content: String,
    upvotes: Number,
    downvotes: Number,
    isAccepted: Boolean,
    createdAt: Date,
    updatedAt: Date
};

// JWT middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// Helper functions
const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if user exists
        const existingUser = users.find(u => u.email === email || u.username === username);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = {
            id: generateId(),
            username,
            email,
            password: hashedPassword,
            createdAt: new Date(),
            lastLogin: new Date()
        };

        users.push(user);

        // Generate token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Update last login
        user.lastLogin = new Date();

        // Generate token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Problems API Routes
app.get('/api/problems', (req, res) => {
    try {
        const { category, status, search, page = 1, limit = 10 } = req.query;
        let filteredProblems = [...problems];

        // Apply filters
        if (category) {
            filteredProblems = filteredProblems.filter(p => p.category === category);
        }
        if (status) {
            filteredProblems = filteredProblems.filter(p => p.status === status);
        }
        if (search) {
            filteredProblems = filteredProblems.filter(p => 
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort by creation date (newest first)
        filteredProblems.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + parseInt(limit);
        const paginatedProblems = filteredProblems.slice(startIndex, endIndex);

        res.json({
            problems: paginatedProblems,
            totalCount: filteredProblems.length,
            currentPage: parseInt(page),
            totalPages: Math.ceil(filteredProblems.length / limit)
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/problems', authenticateToken, (req, res) => {
    try {
        const { title, description, category, priority, tags } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        const problem = {
            id: generateId(),
            userId: req.user.id,
            title,
            description,
            category: category || 'general',
            priority: priority || 'medium',
            status: 'open',
            tags: tags || [],
            createdAt: new Date(),
            updatedAt: new Date(),
            solutions: []
        };

        problems.push(problem);

        // Emit real-time update
        io.emit('problemCreated', problem);

        res.status(201).json({ message: 'Problem created successfully', problem });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.put('/api/problems/:id', authenticateToken, (req, res) => {
    try {
        const problemId = req.params.id;
        const problemIndex = problems.findIndex(p => p.id === problemId);

        if (problemIndex === -1) {
            return res.status(404).json({ error: 'Problem not found' });
        }

        const problem = problems[problemIndex];

        // Check if user owns the problem
        if (problem.userId !== req.user.id) {
            return res.status(403).json({ error: 'Not authorized to update this problem' });
        }

        // Update problem
        const updatedProblem = {
            ...problem,
            ...req.body,
            updatedAt: new Date()
        };

        problems[problemIndex] = updatedProblem;

        // Emit real-time update
        io.emit('problemUpdated', updatedProblem);

        res.json({ message: 'Problem updated successfully', problem: updatedProblem });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Solutions API Routes
app.get('/api/problems/:problemId/solutions', (req, res) => {
    try {
        const problemId = req.params.problemId;
        const problemSolutions = solutions
            .filter(s => s.problemId === problemId)
            .sort((a, b) => {
                // Sort by accepted first, then by upvotes, then by creation date
                if (a.isAccepted && !b.isAccepted) return -1;
                if (!a.isAccepted && b.isAccepted) return 1;
                if (a.upvotes !== b.upvotes) return b.upvotes - a.upvotes;
                return new Date(b.createdAt) - new Date(a.createdAt);
            });

        res.json({ solutions: problemSolutions });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/problems/:problemId/solutions', authenticateToken, (req, res) => {
    try {
        const problemId = req.params.problemId;
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ error: 'Solution content is required' });
        }

        // Check if problem exists
        const problem = problems.find(p => p.id === problemId);
        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }

        const solution = {
            id: generateId(),
            problemId,
            userId: req.user.id,
            content,
            upvotes: 0,
            downvotes: 0,
            isAccepted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        solutions.push(solution);

        // Add solution ID to problem
        problem.solutions.push(solution.id);

        // Emit real-time update
        io.emit('solutionCreated', { problemId, solution });

        res.status(201).json({ message: 'Solution created successfully', solution });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Socket.IO for real-time updates
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinProblem', (problemId) => {
        socket.join(`problem_${problemId}`);
    });

    socket.on('leaveProblem', (problemId) => {
        socket.leave(`problem_${problemId}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for serving HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categories.html'));
});

app.get('/solutions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'solutions.html'));
});

app.get('/hack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HAckType.html'));
});

// Catch-all handler: send back index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Initialize database connection
connectDB();

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('API endpoints available at /api/');
});

module.exports = app;