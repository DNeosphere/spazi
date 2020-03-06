const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const contactSchema = new Schema({
  phone: { type: Number },
  email: { type: String },
  address: { type: String }
});

const needsSchema = new Schema({
  schedule: { type: String },
  subject: { type: String, enum: ['Dog', 'Cat', 'Plant']}
});

const userSchema = new Schema({
  name:    { type: String },
  contact: contactSchema,
  needs:  needsSchema,
  reviews:  { type: String }
}, {timestamps: true});
module.exports = mongoose.model('User', userSchema);
