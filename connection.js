//grab mongoose
var mongoose = require('mongoose');

//connect to the local MongoDB database
mongoose.connect('mongodb://localhost/mentorly');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('connection success');
});

//make this available in our Node applications
module.exports = connection;