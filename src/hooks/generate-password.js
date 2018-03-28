const generator = require('generate-password');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const password = generator.generate({
      length: 8,
      numbers: true
    });
    console.log(password);
    context.data.password = password;
    context.data.plainPwd = password;
    return context;
  };
};
