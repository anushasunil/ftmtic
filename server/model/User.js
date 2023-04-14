const mongoose = require('mongoose')
//Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

});


module.exports = User = mongoose.model("users", UserSchema)