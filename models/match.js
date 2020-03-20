const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


const contactSchema = new Schema({
    phone: { type: String },
    email: { type: String },
    address: { type: String }
});

