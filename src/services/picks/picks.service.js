// Initializes the `picks` service on path `/picks`
const createService = require('feathers-mongoose');
const createModel = require('../../models/picks.model');
//const hooks = require('./picks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'picks',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/picks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/picks');

  //service.hooks(hooks);
};
