const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, trim: true, minlength: 1 },
    flightPrice: { type: Number, required: true },
    description: { type: String, required: true, minlength: 5, default: null, trim: true },
    duration: { type: Number, required: true },
    rate: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, default: Date.now, required: true },
    endDate: { type: Date, default: Date.now, required: true },
    flightImages: [ {type: String, default: null} ]
});

module.exports = mongoose.model('Flight', flightSchema);