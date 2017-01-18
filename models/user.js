var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User schema
var UserSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    username: String,
    email: String,
    password: String
});
var User = module.exports = mongoose.model('user', UserSchema);

module.exports.create = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getAll = function(query, callback) {
    User.find(query, callback);
};

module.exports.getByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
};

module.exports.getById = function(id, callback){
    User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};