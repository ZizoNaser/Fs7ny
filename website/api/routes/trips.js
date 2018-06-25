const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const tripsController = require('../controllers/trips');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, './uploads/');
    },
    filename: function(req, file, callback) {
      callback(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, callback) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype === 'image/png') {
    callback(null, true);      // file is Accepte
    }
    callback(null, false);      // file is rejected
  };
  const upload = multer({
    storage: storage,
    limits: { filesize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
  });
  
//  Normal user routes
router.get("/", tripsController.trips_get_all);

router.post("/", checkAuth, upload.single('tripImage'), tripsController.trips_create_trip);

router.get("/:tripId", tripsController.trips_get_trip);

router.patch("/:tripId", checkAuth, tripsController.trips_update_trip);

router.delete("/:tripId", checkAuth, tripsController.trips_delete);


//  Company routes
// router.get("/", checkAuth, userController.companies_get_all);

// router.post("/", checkAuth, compainesController.companies_create_company);

// router.get("/:companyId", checkAuth, compainesController.compaines_get_company);

// router.delete("/:companyId", checkAuth, compainesController.compaines_delete_company);

module.exports = router;
