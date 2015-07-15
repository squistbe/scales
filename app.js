var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');

// routes
var routes  = require('./routes/index');
var users = require('./routes/users/users');

// database
var dbUri = 'mongodb://heroku_km21fr48:3e4kr9rpjqqccruoa1qj2a04uv@ds047732.mongolab.com:47732/heroku_km21fr48';
var mongoose = require('mongoose');
mongoose.connect(dbUri, function (err, res) {
  if (err) console.log ('ERROR connecting to: ' + dbUri + '. ' + err);
  else console.log ('Succeeded connected to: ' + dbUri);
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;