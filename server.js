var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Hello from Server');
});

app.listen(3000);
console.log('Listening on Port 3000');