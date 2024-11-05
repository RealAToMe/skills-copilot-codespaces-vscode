// Create web servrt
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;
const comments = require('./comments.js');

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
    res.json(comments.getComment(req.params.id));
});

// Create new comment
app.post('/comments', (req, res) => {
    res.json(comments.createComment(req.body));
});

// Update comment
app.put('/comments/:id', (req, res) => {
    res.json(comments.updateComment(req.params.id, req.body));
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
    res.json(comments.deleteComment(req.params.id));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});