const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle potential errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port already in use. Please choose a different port.');
  } else {
    console.error('An error occurred:', err);
  }
  process.exit(1); // Exit process with error code
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
