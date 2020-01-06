var http = require('http');
var dt = require('./coba14');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("apa hayo: " + dt.tulisan());
  res.end();
}).listen(8080); 