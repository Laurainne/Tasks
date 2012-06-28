var express = require('express'),
	app = express.createServer();

///app.get('/', function(req, res) {

///});
app.use(express.static(__dirname + '/public'));
app.listen(8080);
console.log('Express servser started on port %s', 8080);