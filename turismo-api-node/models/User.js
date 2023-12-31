const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    phone: {type: String},
    creatdAt:{type: Date, default: Date.now},
    updatedAt:{type: Date, default: Date.now},
});

module.exports = mongoose.model('User', UserSchema, 'user');