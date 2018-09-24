const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const bodyParser = require('body-parser');
const reviews = require('./controllers/reviews');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');


//const mongo = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;
//const url = "mongodb://localhost:27017/rotten-potatoes'";

//MongoClient.connect(url, function(err, db) {
// if (err) throw err;
// console.log("Database created!");
// db.close();
//});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'));

app.use(reviews);
//////////////////////////////////////////////////////////////

// localhost:3000
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
