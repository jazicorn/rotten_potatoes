const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');


//const createError = require('http-errors');
//const cookieParser = require('cookie-parser');
//const logger = require('morgan');


const reviews = require('./controllers/reviews');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rotten-potatoes', { useNewUrlParser: true });


/*
// Template Engine setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/'
}));

*/


// view engine setup
const hbs = require('express-handlebars');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));


app.use(express.json());

//app.use(logger('dev'));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'));

//const router = express.Router();

//app.use(reviews);
reviews(app);



//////////////////////////////////////////////////////////////

/*
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
*/

module.exports = app;
