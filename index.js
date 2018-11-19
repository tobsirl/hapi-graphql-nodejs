const hapi = require('hapi');
const mongoose = require('mongoose');
require('dotenv').config();

// Create a server with a host and port
const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Test the first route';
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
