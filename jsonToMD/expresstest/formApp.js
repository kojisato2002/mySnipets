var express = require('express');
var ejs = require("ejs");
var bodyParser = require("body-parser");
var app = express();

app.engine('ejs', ejs.renderFile);
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  console.log('---GET Request---');
  console.log('name は' + req.query.name);
  console.log('age は' + req.query.age);
  res.render('formTemp.ejs', {});
});

app.post('/', function(req, res) {
  console.log('---POST Request---');
  console.log('name は' + req.body.name);
  console.log('age は' + req.body.age);
  res.render('formTemp.ejs', {});
});

var server = app.listen(80, function() {
  console.log('サーバーを起動しました');
});

