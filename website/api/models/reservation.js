const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    trip: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }],
    seats: { type: Number, default: 1 , required: true}
});

module.exports = mongoose.model('Reservation', reservationSchema);