module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const stats = new mongooseClient.Schema({


      game : {type: mongooseClient.Schema.ObjectId, ref: 'games'},
      player : {type: mongooseClient.Schema.ObjectId, ref: 'players'},

      pts: {
        type: Number,
        required: true
      },

      reb: {
        type: Number,
        required: true
      },
      
      ast: {
        type: Number,
        required: true
      },
      
      stl: {
        type: Number,
        required: true
      },
      
      blk: {
        type: Number,
        required: true
      },
      
      to: {
        type: Number,
        required: true
      },
      
      pra: {
        type: Number,
        required: true
      },
      
      prasbTo: {
        type: Number,
        required: true
      },          

    }, {
      timestamps: true
    });
  
    return mongooseClient.model('stats', stats);
  };
  