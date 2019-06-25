var http = require('http');
var url = require('url');
var qs = require('querystring');


var server = http.createServer(function(req, res) {
  if(req.method == 'GET') {
    var urlParts = url.parse(req.url, true);
    console.log('---GET Request---');
    console.log('nameは' + urlParts.query.name);
    console.log('ageは' + urlParts.query.age);
  } else {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var params = qs.parse(body);
      console.log('---POST Request---');
      console.log('nameは' + params.name);
      console.log('ageは' + params.age);
      res.end('end');
    });
  }
});

server.listen(80);
console.log('サーバーを起動しました');
