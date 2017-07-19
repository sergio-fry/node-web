var express = require('express');
var app = express();
var exports = module.exports = {};

const port = 3000;

app.get('/', function(req, res){
  res.send('Hello World\n');
});

var server = app.listen(port, function(){
  console.log(`Server running at port ${port}`);
});
