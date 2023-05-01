const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require("./database/models/user");
const Bill = require('./database/models/bill');

//List Users[x]
router.route('/listUsers').get((req,res,next) => {
    User.find({})
        .then((listUsers) => res.send(listUsers))
        .catch((error) => console.log('Error in listUsers ',error))
})

//Create Users[x]
router.route('/createUser').post((req,res,next) => {
    new User({
        'username':req.body.username,
        'password':req.body.password
    })
    .save()
    .then((createUser) => res.send(createUser))
    .catch((error) => console.log('Error in createUser ',error))
})

//Update Users[x]
router.route('/updateUser/:id').put((req,res,next) => {
    User.findOneAndUpdate({_id: req.params.id}, {
        $set:req.body
    })
    .then((updateUser) => res.send(updateUser))
    .catch((error) => console.log('Error in updateUser ',error))
})

//Delete Users[x]
router.route('/deleteUser/:id').delete((req,res,next) => {
    User.findOneAndRemove({_id:req.params.id})
        .then((deleteUser) => res.send(deleteUser))
        .catch((error) => console.log('Error in deleteUser ',error))
})

//List Bills[x]
router.route('/listBills').get((req,res,next) => {
    Bill.find({})
        .then((listBills) => res.send(listBills))
        .catch((error) => console.log('Error in listBills ',error))
})

//Create Bills[x]
router.route('/createBill').post((req,res,next) => {
    new Bill({
        'name':req.body.name,
        'comment':req.body.comment,
        'price':req.body.price
    })
    .save()
    .then((createBill) => res.send(createBill))
    .catch((error) => console.log('Error in createBill ',error))
})

//Update Bills[x]
router.route('/updateBill/:id').put((req,res,next) => {
    Bill.findOneAndUpdate({_id : req.params.id}, {
        $set:req.body
    })
    .then((updateBill) => res.send(updateBill))
    .catch((error) => console.log('Error in updateBill ',error))
})

//Delete Bills[x]
router.route('/deleteBill/:id').delete((req,res,next) => {
    Bill.findOneAndRemove({_id : req.params.id})
        .then((deleteBill) => res.send(deleteBill))
        .catch((error) => console.log('Error in deleteBill ',error))
})

//Login
router.route('login').post((req,res,next) => {
//TODO
})

//Register
router.route('registration').post((req,res,next) => {
//TODO
})

//Logout

module.exports = router;