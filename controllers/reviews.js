const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

module.exports = router;
