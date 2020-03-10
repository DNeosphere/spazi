const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    subjectSchema = require('./subject');

const bcrypt = require('bcrypt');

const saltRounds = 10;

const contactSchema = new Schema({
  phone: { type: String },
  email: { type: String },
  address: { type: String }
});

const needsSchema = new Schema({
  schedule: { type: String },
  subject: { type: Schema.Types.ObjectId, ref: 'Subject'}
});

const userSchema = new Schema({
  name:    { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  contact: contactSchema,
  subject: [subjectSchema],
  reviews:  { type: String }
}, {timestamps: true});

// Hook to User schema to hash passwords

userSchema.pre('save', function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

// Method on user schema to compare passwords

userSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

module.exports = mongoose.model('User', userSchema);
