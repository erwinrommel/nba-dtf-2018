module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const picks = new mongooseClient.Schema({

      game : {type: mongooseClient.Schema.ObjectId, ref: 'games'},
      player : {type: mongooseClient.Schema.ObjectId, ref: 'players'},

      pra: {
        type: Number
      },

      prabsTo: {
        type: Number
      },

      locked: {
        type: Boolean
      },

    }, {
      timestamps: true
    });
  
    return mongooseClient.model('picks', picks);
  };
  