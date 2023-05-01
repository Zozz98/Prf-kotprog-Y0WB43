/*
 localhost:3000 - Backend
 localhost:4200 - Frontend
 $ npm start index.js
*/ 

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('./database/mongoose')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

require('./database/models/user');
const userModel = mongoose.model('User');

const app = express();

app.use(cors());

passport.use('local', new localStrategy(function(username, password, done) {
    userModel.findOne({username: username}, function(error, user) {
        if(error) {
            return done('Error during user query', null);
        }

        if(!user) {
            return done('No such username', null);
        }

        user.comparePasswords(password, function(error, isMatch) {
            if(error) {
                return done(error,false);
            }

            if(!isMatch) {
                return done('Wrong password', false)
            }
            return done(null, user);
        })
    })
}))

passport.serializeUser(function(user, done) {
    if(!user) {
        return('No login user specified', null);
    }
    return done(null, user);
})

passport.deserializeUser(function(user, done) {
    if(!user) {
        return done('No user who can be exited', null);
    }
    return done(null,user);
})

app.use(expressSession({
    secret: 'ProgramrendszerekFejleszteseKotelezoProgram2023Y0WB43',
    resave: true}));



app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/', require('./routes'));

/*
app.get('/users', (req, res, next) => {
    User.find({})
        .then(users => res.send(users))
        .catch((error) => console.log(error))
})
*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server connected on port: ", port);
})