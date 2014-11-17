var express = require('express');
var router = express.Router();

// Create
router.post('/adduser', function(req, res) {
	var db = req.db;
	db.collection('userlist').insert(req.body, function(err, result){
		res.json(result);
	});
});

// Read
router.get('/userlist', function(req, res) {
	var db = req.db,
			userList = db.collection('userlist').find(),
			total;
	userList.count(function (err, items) {
		total = items;
	});
	userList.skip(parseInt(req.query.start)).limit(parseInt(req.query.limit)).toArray(function (err, items) {
		res.json({
			success: true,
			total: total,
			items: items
		});
	});
});
router.get('/userlist/:id', function(req, res) {
	var db = req.db;
	db.collection('userlist').findById(req.params.id, function (err, user) {
		res.json(user);
	});
});

// Update
router.put('/updateuser/:id', function(req, res) {
	var db = req.db,
			userToUpdate = req.params.id,
			doc = { $set: req.body};
	db.collection('userlist').updateById(userToUpdate, doc ,function(err, result) {
		res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
	});
});

// Delete
router.delete('/deleteuser/:id', function(req, res) {
	var db = req.db;
	var userToDelete = req.params.id;
	db.collection('userlist').removeById(userToDelete, function(err, result) {
		res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
	});
});

module.exports = router;