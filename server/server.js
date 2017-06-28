var express = require('express');
var app = express();

// linking module
var randomNumber = require('./modules/randomNumber.js');


// catches request for /randomNumber
app.get('/randomNumber', function(req, res){
  console.log('request for random number received.');
  res.send(randomNumber(1,10).toString());
});

var path = require('path');

// catch-all for all other requests
app.get('/*', function(req, res){
  console.log('got request for a file: ', req.params[0]);

  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));

});

app.listen(5000, function(){
  console.log('listening on the port 5000');
});
