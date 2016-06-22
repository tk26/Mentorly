//our user.js file is at models/user.js
var User = require('./models/user');
  
// create a new user called chris
var user = new User({
  user_id: 3,
  user_name : 'anandkarandikar',
  user_password: 'j8JbboBoulB8k'
});

//call the built-in save method to save to the database
user.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});