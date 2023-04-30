const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/billmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database Connected!")
    })
    .catch((error) => {
        console.log("Database Error: ",error)
    })


module.exports = mongoose;