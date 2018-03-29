module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const players = new mongooseClient.Schema({

      team : {type: mongooseClient.Schema.ObjectId, ref: 'teams'},

      name: {
        type: String,
        required: true
      },           

      position: {
        type: String,
        required: true
      },

      image: {
        type: String,
        required: true
      },
      
      number: {
        type: Number,
        required: true
      },

/*
      
      gp: {
        type: Number,
        required: true
      },
      
      pra: {
        type: Number,
        required: true
      },

      prabst: {
        type: Number,
        required: true
      },

      totalPts: {
        type: Number,
        required: true
      },
      
      totalRebs: {
        type: Number,
        required: true
      },

      totalAst: {
        type: Number,
        required: true
      },

      avePra: {
        type: Number,
        required: true
      },
      
      avePts: {
        type: Number,
        required: true
      },

      aveReb: {
        type: Number,
        required: true
      },

      aveAst: {
        type: Number,
        required: true
      },
      
 */
      

    }, {
      timestamps: true
    });
  
    return mongooseClient.model('players', players);
  };
  