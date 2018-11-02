const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = mongoose.model('Genre', {

    id: Number,
    name: String
});

module.exports = Genre
