// Initializes the `players` service on path `/players`
const createService = require('feathers-mongoose');
const createModel = require('../../models/players.model');
const hooks = require('./players.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'players',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/players', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/players');

  //service.hooks(hooks);
};
