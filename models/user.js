//grab mongoose
var mongoose = require('mongoose');

//connect to the local MongoDB database
mongoose.connect('mongodb://localhost/mentorly');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('connection success');
});

/*
//grab mongoose
var mongoose = require('mongoose');
*/

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