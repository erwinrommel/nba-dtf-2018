module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const admins = mongooseClient.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    profilePhoto: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'blocked'],
      required: true
    },
    addedBy: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'admins'
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('admins', admins);
};
