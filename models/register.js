const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const regSchema = new Schema({
  name:    { type: String },
  email:     { type: String },
}, {timestamps: true});
module.exports = mongoose.model('Register', regSchema);
