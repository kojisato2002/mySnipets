var express = require('express');
var ejs = require('ejs');
var app = express();
var session = require('express-session');

app.engine('ejs', ejs.renderFile);
app.use(session({
  secret : 'hoge',
  resave : true,
  saveUninitialized : true, 
}));

app.get('/', function(req, res) {
  var cnt = req.session.cnt == undefined ? 0 : req.session.cnt;
  cnt++;
  req.session.cnt = cnt;

  res.render('sessionTemp.ejs', {
    cnt: cnt
  });
});

var server = app.listen(80, function() {
  console.log('サーバーを起動しました');
});
