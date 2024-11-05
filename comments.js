// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Read data from file
let data = JSON.parse(fs.readFileSync('data.json'));

// Get all comments
app.get('/comments', (req, res) => {
    res.send(data);
});

// Get comments by id
app.get('/comments/:id', (req, res) => {
    const comment = data.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('Comment not found');
    res.send(comment);
});

// Create new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: data.length + 1,
        