const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end('<h1>Better to use Express, right?</h1>');
});

const port = 3456;

server.listen(port, function() {
  console.log(`Watching ${port}`);
});
