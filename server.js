const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const http = require('http');

app.get('/', function(req, res) {
	res.send('Server is working...');
});

///LISTEN HERE
app.listen(process.env.PORT || 3001, function() {
	console.log('This server is listening on port 3001')
});