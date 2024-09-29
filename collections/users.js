const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {type: String},
    fullName: {type: String},
    password: {type: String}
})

module.exports = mongoose.model('users',UserSchema)
