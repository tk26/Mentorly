//import essentials
var express = require('express');
var app = express();
var port     = process.env.PORT || 3000;
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//connect to the mongodb
var dbConfig = require('./dbConfig.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

//set up app
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//set up ejs for templating
app.set('view engine', 'ejs');

// required for passport
require('./passport')(passport); // pass passport for configuration
app.use(session({ secret: 'sessionsecret', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//load our routes and pass in our app and fully configured passport
require('./routes.js')(app, passport);

//launch the app
app.listen(port);
console.log('Listening on port ' + port);