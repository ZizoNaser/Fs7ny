const mongoose = require("mongoose");

const Reservation = require("../models/reservation");
const Trip = require("../models/trip");

exports.reservations_get_all = (req, res, next) => {
  Reservation.find()
    .select("trip seats _id")
    .populate("trip", "name")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        reservations: docs.map(doc => {
          return {
            _id: doc._id,
            trip: doc.trip,
            seats: doc.seats,
            request: {
              type: "GET",
              url: "http://localhost:3000/reservations/" + doc._id
            }
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.reservations_create_reservation = (req, res, next) => {
  Trip.findById(req.body.tripId)            // Search for the trip first before saving the reservation
    .then(trip => {
      if (!trip) {
        return res.status(404).json({
          message: "Trip not found!"
        });
      }
      const reservation = new Reservation({
        _id: mongoose.Types.ObjectId(),
        seats: req.body.seats,
        trip: req.body.tripId
      });
      trip.availableSeats -= reservation.seats;
      return reservation.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Reservation stored!",
        createreservation: {
          _id: result._id,
          trip: result.trip,
          seats: result.seats
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/reservations/" + result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.reservations_get_reservation = (req, res, next) => {
  Reservation.findById(req.params.reservationId)
    .populate("trip")
    .exec()
    .then(reservation => {
      if (!reservation) {
        return res.status(404).json({
          message: "Reservation not found"
        });
      }
      res.status(200).json({
        reservation: reservation,
        request: {
          type: "GET",
          url: "http://localhost:3000/reservations"
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.reservations_delete_reservation = (req, res, next) => {
  Reservation.findOneAndRemove({ _id: req.params.reservationId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Reservation deleted!",
        request: {
          type: "POST",
          url: "http://localhost:3000/reservations",
          body: { tripId: "ID", seats: "Number" }
        }
      });
      Trip.findByIdAndUpdate( result.tripId, {
          availableSeats: availableSeats + result.seats
      }, err => console.log(err));
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};