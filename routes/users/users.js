var express = require('express');
var mongoose = require('mongoose');
var users = require('../../models/user');
var router = express.Router();

// Constants
var USER_DB = 'users';

/**
 * @api {POST} /users Create new user
 * @apiName AddUser
 * @apiGroup Users
 *
 * @apiExample {curl} Create new user:
 *     curl --data "firstName=Tony" http://localhost:3000/users/
 */
router.post('/', function(req, res, next) {
	users.create(req.body, function (err, post) {
	    if (err) return next(err);
		res.json(post);
	});
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
 *     curl -X GET http://localhost:3000/users/
 *
 */
router.get('/', function(req, res, next) {
	users.find(function (err, userlist) {
	    if (err) return next(err);
	    res.json({
	    	success: true,
	    	total: userlist.length,
	    	items: userlist
	    });
	});
});

/**
 * @api {GET} /users/:id Get user by id
 * @apiName GetUser
 * @apiGroup Users
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample {curl} Example usage:
 *     curl -X GET http://localhost:3000/users/559f3355ccee0d035611e142
 */
router.get('/:id', function(req, res, next) {
	users.findById(req.params.id, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
	});
});

/**
 * @api {PUT} /users/:id Update user by id
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample {curl} Example usage:
 *     curl -X PUT -d firstName=Tony http://localhost:3000/users/559f3355ccee0d035611e142
 */
router.put('/:id', function(req, res, next) {
	users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
	});
})

/**
 * @api {DELETE} /users/:id Delete user
 * @apiName DeleteUsers
 * @apiGroup Users
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample {curl} Example usage:
 *     curl -X DELETE http://localhost:3000/users/559f3355ccee0d035611e142
 */
router.delete('/:id', function(req, res, next) {
	users.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
  	});
});

module.exports = router;