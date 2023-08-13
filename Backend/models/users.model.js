const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    emailAddress: {type: String, unique: true},
    password: String,

});

const userModel = mongoose.model('Users',userSchema);

module.exports = userModel;