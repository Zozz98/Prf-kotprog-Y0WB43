const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    /*userId: {
        type: String,
        unique: true,
        required: true
    },*/
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;