const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const reservationsController = require('../controllers/reservations');

// Handle incoming GET requests to /reservations
router.get("/", checkAuth, reservationsController.reservations_get_all);

router.post("/", checkAuth, reservationsController.reservations_create_reservation);

router.get("/:reservationId", checkAuth, reservationsController.reservations_get_reservation);

router.delete("/:reservationId", checkAuth, reservationsController.reservations_delete_reservation);

module.exports = router;
