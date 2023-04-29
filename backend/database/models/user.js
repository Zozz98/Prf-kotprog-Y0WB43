const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
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