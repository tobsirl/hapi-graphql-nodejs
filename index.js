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
  const { mongoDB } = process.env;
  await server.start();
  mongoose
    .connect(
      mongoDB,
      { useNewUrlParser: true }
    )
    .then(
      () => {
        console.log(`Connected to Mongo server`);
      },
      err => {
        console.log(err);
      }
    );
  console.log(`Server running at: ${server.info.uri}`);
};

init();
