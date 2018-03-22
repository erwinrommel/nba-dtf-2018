module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const games = new mongooseClient.Schema({

      schedule: {
        type: Date,
        required: true
      },

      home : {type: mongooseClient.Schema.ObjectId, ref: 'teams'},
      away : {type: mongooseClient.Schema.ObjectId, ref: 'teams'},

      desc: {
        type: String,
        required: true
      },

      locked: {
        type: Boolean,
        required: true
      },

      results: {
        type: String,
        required: true
      }
    }, {
      timestamps: true
    });
  
    return mongooseClient.model('games', games);
  };
  