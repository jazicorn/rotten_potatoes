var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/reviews', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

module.exports = router;
