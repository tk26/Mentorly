/*//grab connection
var connection = require('connection');
*/

//our user.js file is at models/user.js
var User = require('./models/user');
  
// create a new user called chris
var tk = new User({
  user_id: 1,
  user_name : 'tejaskumthekar',
  user_password: 'd3nsdn19JaIK1'
});

//call the built-in save method to save to the database
tk.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});