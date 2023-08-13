const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

    destinationid: String,
    numberOfPeoples: Number,
    totalPrice: Number,
    emailAddress:String,
});

const bookingModel = mongoose.model('Booking',bookingSchema);

module.exports = bookingModel;