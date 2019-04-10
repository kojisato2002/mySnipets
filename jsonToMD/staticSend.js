var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlParts = url.parse(req.url);
  var path = __dirname + '/pic/' + urlParts.pathname;
  var stream = fs.createReadStream(path);

/*
  stream.on('data', function(data) {
    res.write(data);
  });

  stream.on('end', function(data) {
    res.end();
  });
*/
// stream.pipeを使うとイベントハンドラを登録する必要もなく内部的にendも呼び出される

  stream.pipe(res);

});

server.listen(80);
console.log('サーバーを起動しました');
