const http = require('http');

function handleRequest(req, res) {
  if (req.url === '/current-time') {
    const currentTime = new Date().toISOString();
    res.statusCode = 200;
    res.end(`<h1>Current Time: ${currentTime}</h1>`);
  } else if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Hello World!</h1>');
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
