const express = require('express')

const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('5fc99b23cdf6eedbab68d83866ad32c0')

const Movie = require('../models/movie.js')
const Review = require('../models/review.js');
const Comment = require('../models/comment.js')


module.exports = (app) => {

    app.get('/', (req, res) => {
      moviedb.miscNowPlayingMovies().then(response => {
        res.render('movies-index', { movies: response.results });
      }).catch(console.error)
    })


    app.get('/movies/:id', (req, res) => {
      moviedb.movieInfo({ id: req.params.id }).then(movie => {
        moviedb.movieTrailers({ id: req.params.id }).then(videos => {
          movie.trailer_youtube_id = videos.youtube[0].source
          console.log('VIDEOS.TRAILER_YOUTUBE_ID', videos.youtube[0].source)
          Review.find({movieId: req.params.id}).then(review => {
          // THEN RENDER THE MOVIES-SHOW TEMPLATE
          res.render('movies-show', { movie: movie, review: review });
        }).catch(console.error);

      }).catch(console.error);
    });
    });


    app.get('/movies/:movieId/reviews/new', (req, res) => {
        res.render('reviews-new', { movieId: req.params.movieId })
    })

    app.post('/movies/:movieId/reviews', (req, res) => {
      console.log(req.body)
    })
}
