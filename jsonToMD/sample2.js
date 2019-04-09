var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  var target = '';
  switch(req.url) {
    case '/':
    case '/index':
      target = './index.html';
      break;
    case '/next':
      target = './next.html';
      break;
    default:
      res.writeHead(404, {'Contest-Type': 'text/plain'});
      res.end('bad request');
      return;
  }
  fs.readFile(target, 'utf-8', function(err, data) {
    res.writeHead(200, {'Contest-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(80);
console.log('サーバーを起動しました');
