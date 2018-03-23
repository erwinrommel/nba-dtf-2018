// Initializes the `teams` service on path `/teams`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stats.model');
//const hooks = require('./teams.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'stats',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/stats', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/stats');

  //service.hooks(hooks);
};
