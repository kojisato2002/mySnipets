var express = require('express');
var ejs = require('ejs');
var app = express();
var msg = "";

app.get('/', function(req, res) {
  res.render('ajaxTemp.ejs', {});
});

app.post('/ajaxApp', function(req, res) {
  msg += "hoge";
  res.json({
    msg:msg
  });
});

var server = app.listen(80, function() {
  console.log('サーバーを起動しました');
});
