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
mongoose.set('strictQuery', true);

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Credentials','true');

    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
        res.header("Access-Control-Allow-Headers","Content-Type, Authorization, Content-Length, X-Requested-With");
        res.header('Access-Controll-Max-Age','3600')
    }
    next();
})


passport.use('local', new localStrategy(function(username, password, done) {
    userModel.findOne({username}, function(error, user) {
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
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/', require('./routes'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server connected on port: ", port);
})