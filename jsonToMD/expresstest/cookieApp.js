var express = require('express');
var ejs = require('ejs');
var app = express();
var cookieParser = require('cookie-parser');

app.engine('ejs', ejs.renderFile);
app.use(cookieParser());

app.get('/', function(req, res) {
  var cnt = req.cookies.cnt == undefined ? 0 : req.cookies.cnt;
  cnt++;
  res.cookie('cnt', cnt, {maxAge: 5000});

  res.render('cookieTemp.ejs', {
    cnt: cnt
  });
});

var server = app.listen(80, function() {
  console.log('サーバーを起動しました');
});
