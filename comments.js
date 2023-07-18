// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const commentRoute = require('./routes/comments');

// Create web server
const app = express();

// Configure middleware
app.use(bodyParser.json());

// Configure routes
app.use('/comments', commentRoute);

// Start web server
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});