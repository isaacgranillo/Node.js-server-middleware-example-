var express = require('express');
var app = express();
var port = process.env.port || 1337;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('This is the about page')
})

app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
	console.log('Listening on port ' + port)
})

