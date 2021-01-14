var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./routes/index');

//conncet to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected mongodb server!');
});
mongoose.connect('mongodb://localhost/test');
 
// server configure
const port = 3001;
 
app.use(cors())
//bodyParser setting
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', api);
 
app.listen(port, () => {
  console.log('Express is listening on port', port);
});