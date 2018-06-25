const express = require("express");
const router = express.Router();
const paypalController = require('../controllers/paypal');
const checkAuth = require('../middleware/check-auth');
const paypal = require('paypal-rest-sdk');
const User = require('../models/user');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': '',
    'client_secret': ''
  });

router.post("/",checkAuth, paypalController.paypal_create_payment);

router.get("/success",checkAuth, paypalController.paypal_success_payment);

router.delete("/cancel", checkAuth, paypalController.paypal_cancel_payment);

module.exports = router;
