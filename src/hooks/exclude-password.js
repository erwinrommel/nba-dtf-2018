const _ = require('lodash');
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!_.isEmpty(context.result.addedBy.password)) {
      delete context.result.addedBy.password;
    }
    return context;
  };
};
