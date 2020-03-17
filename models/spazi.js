const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const bcrypt = require('bcrypt');

const saltRounds = 10;

const contactSchema = new Schema({
  phone: { type: String },
  email: { type: String },
  address: { type: String }
});

const billingSchema = new Schema({
  accountNumber: { type: String},
  bank: { type: String },
  country: { type: String }
});

const reviewsSchema = new Schema({
  user_id: { type: String },
  date: { type: Date },
  rating: { type: Number },
  review: { type: String }
})


const spaziSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  imageUrl : { type: String },
  documentId: { type: String },
  contact: {type: contactSchema, default: {}},
  billing: {type: billingSchema, default: {}},
  reviews: [reviewsSchema],
  specialization: { type: String, enum: ['dog', 'cat', 'plant'] }
}, { timestamps: true});


// Hook to Spazi schema to hash passwords

spaziSchema.pre('save', function(next) {
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

// Method on Spazi schema to compare passwords

spaziSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

module.exports = mongoose.model('Spazi', spaziSchema);
