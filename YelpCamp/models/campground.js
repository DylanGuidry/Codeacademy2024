const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the collection
const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);