var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World from pc local!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World pc local!"
  });
});

app.listen(port);
module.exports = app;
