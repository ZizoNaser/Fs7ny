const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip ', required: true, default: null },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car ', required: true, default: null },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel ', required: true, default: null },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight ', required: true, default: null },
    numOfObjects: { type: Number, default: 1 , required: true},
    totalPrice: {type: Number, required: true},
    reservationDate: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('Reservation', reservationSchema);
