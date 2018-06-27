const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, trim: true, minlength: 1 },
    price: { type: Number, required: true },
    description: { type: String, required: true, minlength: 5, default: null, trim: true },
    duration: { type: Number, required: true },
    attendees: [{ _userId: mongoose.Schema.Types.ObjectId }],       // users attending the trip
    rate: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, default: Date.now, required: true },
    endDate: { type: Date, default: Date.now, required: true },
    tripImages: [ {type: String, default: null} ],
    availableSeats: {type: Number, required:true, default:null}
});
 
module.exports = mongoose.model('Trip', tripSchema);
