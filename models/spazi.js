const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

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


const spaziSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  documentId: { type: String },
  contact: {type: contactSchema, default: {}},
  billing: {type: billingSchema, default: {}},
  reviews: { type: String },
  specialization: { type: String, enum: ['dog', 'cat', 'plant'] }
}, { timestamps: true});

module.exports = mongoose.model('Spazi', spaziSchema);
