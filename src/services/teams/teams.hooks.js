const {
  authenticate
} = require('@feathersjs/authentication').hooks;

const populate 				= require('feathers-hooks-common').populate;

const teamPlayersSchema = {
  include: {
    service: '/api/players',
    nameAs: 'players',
    parentField: '_id',
    childField: 'team'
  }
};

module.exports = {
  before: {
    all: [],//authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: populate({ schema: teamPlayersSchema }),
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
