const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const User = require("./database/models/user");
const Bill = require('./database/models/bill');


//List Users[x]
router.route('/listUsers').get((req,res,next) => {
    User.find({})
        .then((listUsers) => res.send(listUsers))
        .catch((error) => console.log('Error in listUsers ',error))
})

//Update Users[x]
router.route('/updateUser/:id').put((req,res,next) => {
    User.findOneAndUpdate({_id: req.params.id}, {
        $set:req.body
    })
    .then((updateUser) => res.send(updateUser))
    .catch((error) => console.log('Error in updateUser ',error))
})

//Get the Updated User[x]
router.route('/updateUser/:id').get((req,res,next)=> {
    User.findById({_id:req.params.id}, {

    })
    .then((updateUser) => res.send(updateUser))
    .catch((error) => console.log('Error in updateUser findById ',error))
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
//Get the Updated Bill[x]
router.route('/updateBill/:id').get((req,res,next)=> {
    Bill.findById({_id:req.params.id}, {

    })
    .then((updateBill) => res.send(updateBill))
    .catch((error) => console.log('Error in updateBill findById ',error))
})

//Delete Bills[x]
router.route('/deleteBill/:id').delete((req,res,next) => {
    Bill.findOneAndRemove({_id : req.params.id})
        .then((deleteBill) => res.send(deleteBill))
        .catch((error) => console.log('Error in deleteBill ',error))
})

//Login[x]
router.route('/login').post((req,res,next) => {
    if(req.body.username && req.body.password) {
        console.log("backend log:", req.body)
        passport.authenticate('local', function(error, user) {
            if(error) {
                return res.status(500).send(error);
            }
            req.logIn(user, function(error) {
                if(error) {
                    return res.status(500).send(error);
                }
                res.status(200).send('Login was successful')
            })
        })(req, res);
    } else {
        return res.status(403).send('Bad request, you need username & password')
    }
})

router.route('/currentUser').get((req,res,next) =>{
    const user = req.user;
    if(user) {
        res.status(200).send(user);
    }else {
        res.status(404).send("User is not logged in")
    }
})

//Register[x]
router.route('/registration').post((req,res,next) => {
    if(req.body.username === 'admin') {
        new User({
        
            'username': req.body.username,
            'password': req.body.password,
            'accessLevel':'admin'
        })
    } else {
        new User({
            'username': req.body.username,
            'password': req.body.password
        })
        .save()
        .then((createUser) => res.send(createUser))
        .catch((error) => console.log('Error in registration ',error))
    }
})

//Logout[x]
router.route('/logout').post((req, res, next) => {
    if(req.isAuthenticated()) {
        req.logout();
        res.status(200).send('Logout was successful')
    }else {
        return res.status(403).send('No signed user, so you cant logout')
    }
})
module.exports = router;