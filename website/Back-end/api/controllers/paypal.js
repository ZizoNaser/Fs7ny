const Trip = require("../models/trip");
const User = require("../models/user");

exports.paypal_create_payment = ('/', (req, res) => {
    // const trip = new Trip({
    // _id: req.body.tripId,
    // name: req.body.name
    // });
    // const user = new User();
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/pay/success",
            "cancel_url": "http://localhost:3000/pay/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "First item ",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "This is the payment description."
    }]
};
    
paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i =0 ; i < payment.links.length ; i++){
                if (payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});

exports.paypal_success_payment = ('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success');
        }
    });
});

exports.paypal_cancel_payment = ('/cancel', (req, res) => res.send('Cancelled'));
