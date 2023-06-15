const runServer = (fastify) => {
  fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
};

module.exports = runServer;
