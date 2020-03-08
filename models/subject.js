const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const subjectSchema = new Schema({
  name: { type: String },
  type: { type: String, enum: ['dog', 'cat', 'plant'] },
  specifications: { type: String},
  ownerId: { type: Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
