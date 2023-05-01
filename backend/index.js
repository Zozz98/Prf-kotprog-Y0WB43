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
const expressSession = require('express-session')

const app = express();

app.use(express.json());
app.use(cors());
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