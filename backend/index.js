/*
localhost:3000 - Backend
localhost:4200 - Frontend
*/ 

const express = require('express');
const cors = require('cors');
const mongoose = require('./database/mongoose')

const User = require("./database/models/user");
const Bill = require('./database/models/bill');

const app = express();

app.use(cors());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.get('/users', (req, res, next) => {
    User.find({})
        .then(users => res.send(users))
        .catch((error) => console.log(error))
})

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server connected on port: ", port);
})