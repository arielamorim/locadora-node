const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentSchema = new Schema({
    idUser: {
        type: String,
        required: true,
    },
    idMovies: [{ type: String}],
    originalPrice: {
        type: String,
        required: true,
    },
    currentPrice: {
        type: String
    },
    rentDate: { 
        type: Date, 
        default: Date.now 
    },
    returnDate: { 
        type: Date,  
    },
    rentStatus: {
        type: String,
        default: "open"
    },
    rentDeadline: {
        type: Date
    }
});

const Rent = mongoose.model('Rent', rentSchema);
module.exports = Rent;