var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  var page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Bien on avance ! ");
  res.end();
});
server.listen(5000);
