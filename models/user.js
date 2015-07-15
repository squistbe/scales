var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 	firstName: String,
    lastName: String,
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

UserSchema.path('email').validate(function (email) {
   return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
}, 'The e-mail field cannot be empty.')

module.exports = mongoose.model('users', UserSchema);