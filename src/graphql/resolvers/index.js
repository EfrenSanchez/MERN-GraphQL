//Resolvers
const authResolver = require('./auth');
const eventsResolver = require('./event');
const bookingResolver = require('./booking');

//Root
const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
};

module.exports = rootResolver;