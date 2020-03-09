const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    subjectSchema = require('./subject');

const contactSchema = new Schema({
  phone: { type: Number },
  email: { type: String },
  address: { type: String }
});

const needsSchema = new Schema({
  schedule: { type: String },
  subject: { type: Schema.Types.ObjectId, ref: 'Subject'}
});

const userSchema = new Schema({
  name:    { type: String },
  contact: contactSchema,
  subject: [subjectSchema],
  reviews:  { type: String }
}, {timestamps: true});
module.exports = mongoose.model('User', userSchema);
