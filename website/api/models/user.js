const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        default: null,
        minlength: 11
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 1,
      // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email!'
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    }
  });

module.exports = mongoose.model('User', userSchema);


