// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieApp')
.then(() => {
    console.log('Connected to MongoDB...');
    })
.catch(err => console.error('Could not connect to MongoDB...', err));

// Schema is a class that defines the structure of the documents in a collection
// A model is a class with which we construct documents (instances of the model)

// {
//     title: 'Dream Scenario',
//     year: 2024,
//     score: 9.8,
//     rating: 'R'
// }

// Define the schema for the collection
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Create a model for the collection
const Movie = mongoose.model('Movie', movieSchema);

// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//     {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
// .then(data => {
//     console.log('It worked!');
//     console.log(data);
// })

