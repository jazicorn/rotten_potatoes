const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Review = mongoose.model('Review', {
  title: String
});

module.exports = mongoose.model('Review', Review)
