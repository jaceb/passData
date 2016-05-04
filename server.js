var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mainCtrl = require('./js/mainCtrl.js')
mongoose.connect('mongodb://localhost/passData')
mongoose.connection.once('open', function(){
  console.log('connecting to pass data base');
})

var app = express();
app.use(bodyParser.json());
app.use(express());

app.post('/api/data');
app.get('/api/data', mainCtrl.Read);
app.post('/api/data', mainCtrl.Create)

var port = 4000;
app.listen(port, function(){
  console.log("Easy listening on port " + port +": the breeze")
})
