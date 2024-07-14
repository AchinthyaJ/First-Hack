// fileName : server.js 
// Example using the http module
const http = require('http');

// Create an HTTP server


// Specify the port to listen on
const hostname = '127.0.0.1';
const port = 3000;

// Start the server

const categoriesRoute = require('./routes/categories');
const hackRoute = require('./routes/hack').default;
const indexRoute = require('./routes/index');
const solutionsRoute = require('./routes/solutions').default;

const server = http.createServer((req, res) => {
    // Handle routes
    if (req.url.startsWith('./routes/categories')) {
        categoriesRoute(req, res);
    } else if (req.url.startsWith('./routes/hack')) {
        hackRoute(req, res);
    } else if (req.url === './routes/index') {
        indexRoute(req, res);
    } else if (req.url.startsWith('./routes/solutions')) {
        solutionsRoute(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const express = require('express');
const path = require('./routes');

const app = express(); // Create an Express app

// Serve static files from the 'public' directory
app.use(express.static(path(__dirname, 'public')));

// ... other routes and server logic
app.get('/categories', categoriesRoute); // Handle requests for /categories with categoriesRoute function
app.get('/index', indexRoute); // Handle requests for / (root) with indexRoute function
app.get('/hack', categoriesRoute); // Handle requests for /categories with categoriesRoute function
app.get('/solutions', indexRoute); // Handle requests for / (root) with indexRoute function



server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});
