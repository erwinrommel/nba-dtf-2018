// Initializes the `admins` service on path `/api/admins`
const createService = require('feathers-mongoose');
const createModel = require('../../models/admins.model');
const hooks = require('./admins.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'admins',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/admins', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/admins');

  service.hooks(hooks);
};
