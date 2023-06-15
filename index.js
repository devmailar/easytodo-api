const fastify = require('fastify')({ logger: true });
const crypto = require('crypto');
const runServer = require('./api/runServer');

// Listen for endpoints
fastify.get('/', (request, reply) => {
  reply.send({
    message: 'Welcome to the Rest API!',
    endpoints: ['/createUser', '/deleteUser'],
  });
});

fastify.get('/createUser', (request, reply) => {
  reply.send({
    username: 'Mattio',
    password: crypto.randomUUID(),
  });
});

fastify.get('/deleteUser', (request, reply) => {
  reply.send({ reply: 'Deleted user' });
});

// Run the server!
runServer(fastify);
