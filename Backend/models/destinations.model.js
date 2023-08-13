const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema({

    name: {type: String, unique: true},
    details: String,
    description: String,
    price: String,
    img1: String,
    img2: String,
    img3: String,
    rating:Number,
    tag:[String]

});

const destinationModel = mongoose.model('Destinations',destinationSchema);

module.exports = destinationModel;