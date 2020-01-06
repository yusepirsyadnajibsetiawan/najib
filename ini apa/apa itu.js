var http = require('http');
var dt = require('./apa itu');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("tess: " + dt.tess());
  res.end();
}).listen(8080); 