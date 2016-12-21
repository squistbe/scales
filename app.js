var path            = require('path');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var consign         = require('consign');
var express         = require('express');
var app             = express();

consign({cwd: 'api'})
    .include('schema')
    .then('models')
    .then('middleware')
    .then('routes')
    .into(app);

// database
var DB_URI = 'mongodb://heroku_km21fr48:3e4kr9rpjqqccruoa1qj2a04uv@ds047732.mlab.com:47732/heroku_km21fr48';
mongoose.connect(DB_URI, function (err, res) {
  if (err) console.log ('ERROR connecting to: ' + DB_URI + '. ' + err);
  else console.log ('Succeeded connected to: ' + DB_URI);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

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