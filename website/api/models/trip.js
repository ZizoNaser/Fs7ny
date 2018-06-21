const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, trim: true, minlength: 1 },
    price: { type: Number, required: true },
    description: { type: String, required: true, minlength: 5, default: null, trim: true },
    duration: { type: Number, required: true },
    attendees: [{ _userId: mongoose.Schema.Types.ObjectId }],       // users attending the trip
    rate: { type: Number, required: true },
    ownerCompany: { _companyId: mongoose.Schema.Types.ObjectId },
    startDate: {type: new Date(), required: true },
    endDate: {type: new Date(), required: true }
});

module.exports = mongoose.model('Trip', tripSchema);