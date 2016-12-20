module.exports = function(app) {
    var User = app.middleware.user;

    /**
     * @api {POST} /users Create new user
     * @apiName AddUser
     * @apiGroup Users
     *
     * @apiExample {curl} Create new user:
     *     curl --data "firstName=Tony" http://localhost:3000/users/
     */
    app.post('/', function(req, res, next) {
        User.create(req.body, function (err, post) {
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
    app.get('/', User.getAll);

    /**
     * @api {GET} /users/:id Get user by id
     * @apiName GetUser
     * @apiGroup Users
     * @apiParam {String} id Users unique ID.
     *
     * @apiExample {curl} Example usage:
     *     curl -X GET http://localhost:3000/users/559f3355ccee0d035611e142
     */
    app.get('/:id', User.getById);

    /**
     * @api {PUT} /users/:id Update user by id
     * @apiName UpdateUser
     * @apiGroup Users
     * @apiParam {String} id Users unique ID.
     *
     * @apiExample {curl} Example usage:
     *     curl -X PUT -d firstName=Tony http://localhost:3000/users/559f3355ccee0d035611e142
     */
    app.put('/:id', function(req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });

    /**
     * @api {DELETE} /users/:id Delete user
     * @apiName DeleteUsers
     * @apiGroup Users
     * @apiParam {String} id Users unique ID.
     *
     * @apiExample {curl} Example usage:
     *     curl -X DELETE http://localhost:3000/users/559f3355ccee0d035611e142
     */
    app.delete('/:id', function(req, res, next) {
        User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });

    return this;
};