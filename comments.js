// Create web server
// 1. Create a web server
// 2. Create a route for '/'
// 3. Create a route for '/comments'
// 4. Create a route for '/comments/:id'
// 5. Start the server
// 6. Test the server

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for '/'
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 3. Create a route for '/comments'
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// 4. Create a route for '/comments/:id'
app.get('/comments/:id', (req, res) => {
  res.send('Comment ID: ' + req.params.id);
});

// 5. Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 6. Test the server
// http://localhost:3000
// http://localhost:3000/comments
// http://localhost:3000/comments/123
// http://localhost:3000/comments/456

// End of comments.js
