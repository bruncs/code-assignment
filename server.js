const http = require('http');
const { env } = require('./lib/config');
const { parseBody } = require('./lib/parsers');
const { runCommands } = require('./lib/driver');
const { storeRequest, readRequests } = require('./lib/data');

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'POST': {
      res.end();
      parseBody(req, (body) => {
        storeRequest(body);
        runCommands(body.url, body.commands);
      });
      break;
    }
    case 'GET': {
      readRequests((requests) => {
        if (requests) {
          res.end(requests);
        } else {
          res.writeHead(204);
          res.end();
        }
      });
      break;
    }
    default: {
      res.writeHead(404);
      res.end();
    }
  }
});

server.listen(env.port, () => console.log('Serviço rodando na porta:', env.port));
