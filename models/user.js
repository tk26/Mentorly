//grab database configuration
var dbConfig = require('../dbConfig.js');

//grab mongoose
var mongoose = require('mongoose');

//connect to the local MongoDB database
mongoose.connect(dbConfig.url);

//grab Schema
var Schema = mongoose.Schema;

//create Schema
var userSchema = new Schema({
	user_id : { type: Number, required: true, unique: true },
	user_name:{ type: String, required: true, unique: true },
  	user_password: { type: String, required: true },
  	user_auth_token : String,
  	user_created_at : Date
});

//create a model using schema
var User = mongoose.model('User', userSchema);

//make this available in our Node applications
module.exports = User;