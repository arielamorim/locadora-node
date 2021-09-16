
require('dotenv').config();

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create
const user_create = (req, res) => {
    
    // pass hash 
    req.body.userPass = bcrypt.hashSync(req.body.userPass, 10);

    const user = new User(req.body);
    user.save().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}


// Read
const user_list = (req, res) => {
    User.find().sort({ createdAt: -1 }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Update
const user_update = (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body.update, {new: true})
    .then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Delete
const user_delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).then(result => {
        res.status(201);
        res.send(result);
        // res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
}

// Login
const user_login = (req, res) => {
    User.findOne({userLogin: req.body.userLogin})
    .then(result => {
        if(result || bcrypt.compareSync(req.body.userPass, result.userPass)) {
            const token = jwt.sign({auth: {
                id: result._id,
                isAdmin: result.userAdmin
            }}, process.env.SECRET, {expiresIn: "1h"});
            res.send(token);
        } else {
            res.send('nope');
        }
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
    user_delete,
    user_update,
    user_list,
    user_create,
    user_login
}