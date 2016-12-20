module.exports = function(app) {
    var User = app.schema.user;

    this.find = function() {
        return User.find();
    };

    this.findById = function(id) {
        return User.findById(id);
    };

    return this;
};