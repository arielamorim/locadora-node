const Rent = require('../models/rent');
const rentHelper = require('../helpers/rent');

// Create
const rent_create = (req,res) => {
    console.log('criando rent -> ', req.body);
    
    const rent = new Rent(req.body);
    
    rent.save().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Read
const rent_list = (req, res) => {
    Rent.find().sort({ createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Update
const rent_update = (req, res) => {
    Rent.findByIdAndUpdate(req.body.id, req.body.update, {new: true})
    .then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Delete
const rent_delete = (req, res) => {
    Rent.findOneAndDelete(req.params.id)
    .then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Update a rent by id, and return final price
const rent_return_movies = (req, res) => {
    // Calculate final price
    const newRent = rentHelper.calcPrice(req.body.data);
    
    Rent.findByIdAndUpdate(req.body.id, newRent, {new: true})
    .then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    rent_create,
    rent_list,
    rent_update,
    rent_delete,
    rent_return_movies
}