const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/makecampground', async (req, res) => {
    // Create a new campground
    const camp = new Campground({title: 'My Backyard', price: '0.00', description: 'Cheap camping!', location: 'My backyard'});
    // Save the campground to the database
    await camp.save();
    res.send(camp);
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});