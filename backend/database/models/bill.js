const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        maxLength: 100,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;