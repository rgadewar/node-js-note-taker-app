const express = require('express');
const path = require('path');

// Import the feedback router
const api = require('./router/index');

const port = process.env.PORT || 3010;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Send all the requests that begin with / to the index.js in the routes folder
app.use('/', api);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});