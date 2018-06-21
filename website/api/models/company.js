const mongoose = require('mongoose');
const validator = require('validator');

const companySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 1,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email!'
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    trips: [{ _tripId: mongoose.Schema.Types.ObjectId }],
    rate: { type: Number, required: true }
  });

module.exports = mongoose.model('Company', companySchema);


