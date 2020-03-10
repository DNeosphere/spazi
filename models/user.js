const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    subjectSchema = require('./subject');

const bcrypt = require('bcrypt');

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

UserSchema.pre('save', function(next) {
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

module.exports = mongoose.model('User', userSchema);
