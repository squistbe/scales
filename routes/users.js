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
			sort = req.query.sort,
			search = req.query.search,
			searchQuery = {},
			sorter = {},
			total;

	// search
	if (search) {
		search = new RegExp(search, 'i');
		searchQuery['$or'] = [
			{firstName: search},
			{lastName: search},
			{userId: search},
			{email: search}
		];
	}
	var userList = db.collection('userlist').find(searchQuery);

	// sorting
	if (sort) {
		sort = JSON.parse(decodeURIComponent(sort));
		for (var i = 0; i < sort.length; i++) {
			sorter[sort[i].property] = sort[i].direction === 'ASC' ? 1 : -1;	
		}
	} else {
		sorter = {'_id': 1};
	}

	// total param for paging
	userList.count(function (err, items) {
		total = items;
	});
	userList.sort(sorter).skip(parseInt(req.query.start)).limit(parseInt(req.query.limit)).toArray(function (err, items) {
		res.json({
			success: true,
			total: total,
			items: items
		});
	});
});

// get a user by id
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