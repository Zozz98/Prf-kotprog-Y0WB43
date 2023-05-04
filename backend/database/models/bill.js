const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    /*billId: {
        type: String,
        required: true,
        unique: true
    },*/
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;