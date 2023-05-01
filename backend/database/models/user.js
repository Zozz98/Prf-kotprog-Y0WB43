const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;