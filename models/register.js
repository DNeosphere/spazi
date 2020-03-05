const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const regSchema = new Schema({
  name:    { type: String },
  email:     { type: String },
});
module.exports = mongoose.model('Register', regSchema);
