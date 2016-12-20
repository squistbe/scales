module.exports = function(app) {
    var mongoose = require('mongoose');

    var UserSchema = new mongoose.Schema({
        name: {
            first: String,
            last: String
        },
        email: String,
        street: String,
        state: String,
        postalCode: String,
        country: String,
        dateCreated: { type: Date, default: Date.now },
        dateUpdated: { type: Date, default: Date.now },
        ssn: String,
        mobile: String,
        home: String,
        work: String
    });

    return mongoose.model('User', UserSchema);
};