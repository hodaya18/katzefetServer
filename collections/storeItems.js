const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    makat: {type: Number},
    name: {type: String},
    img: {type: String},
    cost: {type: Number},
    stockAmount:{type: Number},
    category:{type: String}
})

module.exports = mongoose.model('storeItems',UserSchema)
