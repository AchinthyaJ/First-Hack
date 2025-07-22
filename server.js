const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root path - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for categories page
app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categories.html'));
});

// Route for solutions page
app.get('/solutions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'solutions.html'));
});

// Route for hacker typer page
app.get('/hack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HAckType.html'));
});

// Catch-all handler: send back index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});