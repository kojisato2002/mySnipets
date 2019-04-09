var http = require('http');
var fs = require('fs');

var indexPage = fs.readFileSync('./index.html', 'utf-8');
var nextPage = fs.readFileSync('./next.html', 'utf-8');


var server = http.createServer(function(req, res) {
  switch(req.url) {
    case '/':
    case '/index':
      res.writeHead(200, {'Contest-Type': 'text/html'});
      res.write(indexPage);
      res.end();
      break;
    case '/next':
      res.writeHead(200, {'Contest-Type': 'text/html'});
      res.write(nextPage);
      res.end();
      break;
    default:
      res.writeHead(404, {'Contest-Type': 'text/plain'});
      res.end('bad request');
      return;
  }
});

server.listen(80);
console.log('サーバーを起動しました');
