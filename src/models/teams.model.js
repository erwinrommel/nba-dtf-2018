module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const teams = new mongooseClient.Schema({

      shortName: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      logo: {
        type: String,
        required: true
      }
    }, {
      timestamps: true
    });
  
    return mongooseClient.model('teams', teams);
  };
  