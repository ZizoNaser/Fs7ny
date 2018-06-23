const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {mongoose} = require("./db/mongoose");
const morgan = require('morgan');

const tripRoutes = require("./api/routes/trips");
const userRoutes = require('./api/routes/user');

// mongoose.connect(
// "mongodb://Mohamed-fawzi:"+ 
// process.env.MONGO_ATLAS_PW +
//  "@natours-shard-00-00-xfdku.mongodb.net:27017,natours-shard-00-01-xfdku.mongodb.net:27017,natours-shard-00-02-xfdku.mongodb.net:27017/test?ssl=true&replicaSet=Natours-shard-0&authSource=admin&retryWrites=true" , 
//  {
//   useMongoClient: true
//  });



app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {                             // Preventing CORS Errors
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/trips", tripRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
