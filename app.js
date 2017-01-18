var path            = require('path');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var express         = require('express');
var validator       = require('express-validator');
var session         = require('express-session');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

// database
mongoose.connect(process.env.MONGODB_URI, function (err, res) {
  if (err) console.log ('ERROR connecting db: ' + err);
  else console.log ('Connected to db');
});

var index = require('./routes/index');
var user = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// session
app.use(session({
    secret: process.env.SECURE_KEY,
    saveUninitialized: true,
    resave: true
}));

// passport init
app.use(passport.initialize());
app.use(passport.session());

// express validator
app.use(validator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use('/', index);
app.use('/user', user);

// set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('Server started on port '+ app.get('port'));
});

module.exports = app;