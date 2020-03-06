const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const userSchema = new Schema({
  name:    { type: String },
  contact:     { type: Number },
  need:  { type: String },
  subject:    { type: String, enum:
  ['Dog', 'Cat', 'Person', 'Plant']
        },
  specification:  { type: String }
}, {timestamps: true});
module.exports = mongoose.model('User', userSchema);
