// Initializes the `users` service on path `/users`
const createService = require('feathers-mongoose');
const createModel = require('../../models/games.model');
//const hooks = require('./users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'games',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/games', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/games');

  //service.hooks(hooks);
};
