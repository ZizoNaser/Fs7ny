const mongoose = require("mongoose");
const Trip = require("../models/trip");



exports.trips_get_all = (req, res, next) => {
  Trip.find()               // get all trips
    .select("name price _id description startDate endDate duration ownerCompany rate attendees tripImage")
    .populat('attendees')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        trips: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            description: doc.description,
            duration: doc.duration,
            ownerCompany: doc.ownerCompany,
            rate: doc.rate,
            startDate: doc.startDate,
            endDate: doc.endDate,
            attendees: doc.attendees,
            tripImage: doc.tripImage,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/trips/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.trips_create_trip = (req, res) => {
  const trip = new Trip({           // create new trip
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    duration: req.body.duration,
    ownerCompany: req.body.ownerCompany,
    rate: req.body.rate,
    startDate: req.body.startDate,
    endDate: doreq.bodyc.endDate,
    attendees: req.body.attendees,
    tripImage: req.file.path
  });           
  trip                  // save to database
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created trip successfully",
        createdtrip: {
        description: result.description,
        duration: result.duration,
        ownerCompany: result.ownerCompany,
        rate: result.rate,
        startDate: result.startDate,
        endDate: result.endDate,
        attendees: result.attendees,
        name: result.name,
        price: result.price,
        tripImage: result.tripImage,
        _id: result._id,
        request: {
            type: "GET",
            url: "http://localhost:3000/trips/" + result._id
          }
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

exports.trips_get_trip = (req, res, next) => {
  const id = req.params.tripId;     // get specific trip by id
  Trip.findById(id)
    .select("name price _id description startDate endDate duration ownerCompany rate attendees tripImage")
    .populat('attendees')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          trip: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/trips"
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.trips_update_trip = (req, res, next) => {
  const id = req.params.tripId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Trip.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Trip updated!",
        request: {
          type: "GET",
          url: "http://localhost:3000/trips/" + id
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

exports.trips_delete = (req, res, next) => {
  const id = req.params.tripId;
  Trip.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Trip deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/trips",
          body: { name: "String", price: "Number", description: "String" }
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
