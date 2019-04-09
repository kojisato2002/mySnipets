var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World by origin node.js');
  res.end();
});

server.listen(80);
console.log('サーバーを起動しました');
