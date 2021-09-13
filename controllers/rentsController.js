const Rent = require('../models/rent');

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
    console.log('updating -> ', req.body);
    Rent.findByIdAndUpdate(req.body.id, req.body.update, {new: true}).then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Delete
const rent_delete = (req, res) => {
    Rent.findOneAndDelete(req.params.id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    rent_create,
    rent_list,
    rent_update,
    rent_delete
}