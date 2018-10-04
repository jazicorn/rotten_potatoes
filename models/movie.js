const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = mongoose.model('Movie', {

  vote_count: Number,
  id: Number,
  video: Boolean,
  vote_average: Number,
  title: String,
  popularity: Number,
  poster_path: String,
  original_language: String,
  original_title: String,
  genre_ids: [
    Number,
    Number,
    Number
  ],
  backdrop_path: String,
  adult: Boolean,
  overview: String,
  release_date: String,
  status: String,
  spoken_languages_name: [
     String,
     String,
     String
  ],

});

module.exports = Movie
