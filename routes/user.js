var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

/**
 * @api {POST} /users Create new user
 * @apiName AddUser
 * @apiGroup Users
 *
 * @apiExample {curl} Create new user:
 *     curl --data "firstName=Tony" http://localhost:3000/user/
 */
router.post('/', function(req, res) {
    req.checkBody('name.first', 'First name is required').notEmpty();
    req.checkBody('name.last', 'First name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors) {
        res.send({
            errors: errors
        });
    } else {
        var newUser = new User(req.body);

        User.create(newUser, function(err, user){
            if(err) throw err;
            res.status(200).send({
                message: 'User created successfully.'
            });
        });
    }
});

/**
 * @api {GET} /users Get users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiParam {Object} sort
 * @apiParam {String} filters
 * @apiParam {Number} start
 * @apiParam {Number} limit
 *
 * @apiExample {curl} Get all users:
 *     curl -X GET http://localhost:3000/user/
 *
 */
router.get('/', function(req, res) {
    User.getAll({}, function(err, users) {
        if(err) throw err;
        res.json(users);
    });
});

/**
 * @api {GET} /users/:id Get user by id
 * @apiName GetUser
 * @apiGroup Users
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample {curl} Example usage:
 *     curl -X GET http://localhost:3000/user/559f3355ccee0d035611e142
 */
router.get('/:id', User.getById);

/**
 * @api {PUT} /users/:id Update user by id
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample {curl} Example usage:
 *     curl -X PUT -d firstName=Tony http://localhost:3000/user/559f3355ccee0d035611e142
 */
router.put('/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/**
 * @api {DELETE} /user/:id Delete user
 * @apiName DeleteUsers
 * @apiGroup Users
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample {curl} Example usage:
 *     curl -X DELETE http://localhost:3000/user/559f3355ccee0d035611e142
 */
router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/**
 * @api {POST} /user/login Login user
 * @apiName LoginUser
 * @apiGroup Users
 *
 * @apiExample {curl} Login user:
 *     curl --data "username=jsmith" http://localhost:3000/user/login
 */
router.post('/login',
    passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login', failureFlash: true}),
    function(req, res) {
        res.redirect('/');
    });

/**
 * @api {GET} /user/logout Logout user
 * @apiName LogoutUser
 * @apiGroup Users
 *
 * @apiExample {curl} Logout user:
 *     curl http://localhost:3000/user/logout
 */
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getByUsername(username, function(err, user){
            if(err) throw err;
            if(!user) return done(null, false, {message: 'Unknown User'});

        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch) return done(null, user);
            else return done(null, false, {message: 'Invalid password'});
        });
        });
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getById(id, function(err, user) {
        done(err, user);
    });
});

module.exports = router;