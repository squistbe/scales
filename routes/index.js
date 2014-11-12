var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.render('index', { title: 'Express' });
});

module.exports = router;
