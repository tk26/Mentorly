var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
        email        : String,
        password     : String,
        first_name   : String,
        last_name    : String,
        gender       : String
});

//Hash Generator
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Password Validator
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//Create Model for export
module.exports = mongoose.model('users', userSchema);
