var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/:corpus/:input', function(req, res){
  //res.send('Process ' + req.params.input + ' from ' + req.params.corpus);
  res.send(JSON.stringify(require('wordplay.js').getWordMatches(req.params.input, req.params.corpus)), null, 4);
});

var server = app.listen(12892, function() {
    console.log('Listening on port %d', server.address().port);
});


/*
//This works.

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var t = require('wordplay.js').tryThis();
  response.write("Hello World!! Exclamation!" + t);
  response.end();
}).listen(12892);
*/


