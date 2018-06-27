const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, trim: true, minlength: 1 },
    rentPrice: { type: Number, required: true },
    description: { type: String, required: true, minlength: 5, default: null, trim: true },
    duration: { type: Number, required: true },
    rate: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, default: Date.now, required: true },
    endDate: { type: Date, default: Date.now, required: true },
    carImages: [ {type: String, default: null} ]
});

module.exports = mongoose.model('Car', carSchema);