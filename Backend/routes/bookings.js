var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const bookngModel = require('../models/booking.model');

/* POST create new booking. */
router.post('/new', async(req, res)=> {

    let destinationid = req.body.destinationid;
    let numberOfPeoples = req.body.numberOfPeoples;
    let totalPrice = req.body.totalPrice;
    let emailAddress = req.body.emailAddress;
  
    let bookingObj = new bookngModel({
      destinationid: destinationid,
      numberOfPeoples:numberOfPeoples,
      totalPrice:totalPrice,
      emailAddress: emailAddress,

    })
    bookingObj.save(function(err,bookingObj)
    {
      if(err)
      {
        res.send({status: 500, message: 'Unable to add booking!'});
      }else{
        res.send({status: 200, message: 'Able to add Booking!',bookingDetails: bookingObj});
      }
    })
     
  });
router.get('/listbooking', function(req, res, next) {
 
    bookngModel.find(function(err,bookingsListResponse)
    {
      if(err)
      {
        res.send({status: 500, message: 'Unable to find Booking!'});
      }else{
        const recordCount = bookingsListResponse.length; 
        res.send({status: 200,recordCount:recordCount ,results: bookingsListResponse});
      }
    })
  
  });
  module.exports = router;