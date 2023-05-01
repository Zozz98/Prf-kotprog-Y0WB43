const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    accessLevel: {
        type: String
    }
});

UserSchema.pre('save', function(next) {
    const user = this;
    if(user.isModified('password')) {
        user.accessLevel = 'basic';
        bcrypt.genSalt(10, function(error,salt) {
            if(error) {
                console.log('Error during salt generate')
                return next(error)
            }
            bcrypt.hash(user.password, salt, function(error, hash) {
                if(error) {
                    console.log('Error during hash')
                    return next(error)
                }
                user.password = hash
                return next()
            })
        })
    } else {
        return next()
    }
})

UserSchema.methods.comparePasswords = function(password, nxt) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        nxt(error, isMatch);
    })
}

const User = mongoose.model('User', UserSchema);

module.exports = User;