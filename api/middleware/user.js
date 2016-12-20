module.exports = function(app) {
    var User = app.models.user;

    this.index = function(req, res) {
        return res.redirect('/user');
    };

    this.getAll = function(req, res) {
        var users = User.find();
        return res.json(users);
    };

    this.getById = function(req, res) {
        return User.findById(req.params.id);
    };

    return this;
};
