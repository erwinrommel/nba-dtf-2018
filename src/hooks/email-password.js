// eslint-disable-next-line no-unused-vars
module.exports = function (passwordFor, options = {}) {
  return async context => {
    context.app.get('emailer').sendMail({
      from: 'jcgh.bir@gmail.com',
      to: context.data.email,
      subject: 'SIF ' + passwordFor + ' Registration',
      html: '<h2>' + context.data.plainPwd + '</h2>'
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
    delete context.data.plainPwd;
    return context;
  };
};
