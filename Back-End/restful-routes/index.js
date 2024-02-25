// CRUD - Create, Read, Update, Delete

const express = require('express');
const app = express();
const port = 3000;

// Require the path module
const path = require('path');

// Require the uuid module
// This is used to generate unique ids for each comment
const { v4: uuid } = require('uuid');
uuid();

// Middleware
// This is required to parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Method Override
// This is required to use the DELETE method
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!',
        id: uuid()
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog',
        id: uuid()
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd',
        id: uuid()
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof',
        id: uuid()
    }
];

// Define your routes here
// Read 
app.get('/comments', (req, res) => {
    // res.send('This is the comments page');
    res.render('comments/index', { comments });
});

// Create
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

// Create
app.post('/comments', (req, res) => {
    // res.send('POST request for comments');
    const { username, comment } = req.body;
    // Add the new comment to the comments array
    comments.push({ username, comment, id: uuid()});
    // Redirect to the comments page
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

// Update
app.patch('/comments/:id', (req, res) => {
    // Checking to see if the patch request is working in postman
    res.send('PATCH request for comments');
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});


// ignored below script for now. 

// Define your routes here
app.get('/tacos', (req, res) => {
    res.send('GET request for tacos');
});

app.post('/tacos', (req, res) => {
    const {meat, qty} =  req.body
    res.send(`Here are your ${qty} ${meat} tacos`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});