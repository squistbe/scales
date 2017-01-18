var express = require('express');
var router = express.Router();

router.get('/', ensureAuthenticated, function(req, res) {
    res.send('running...');
});

function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) return next();
    else res.redirect('/');
}

module.exports = router;
