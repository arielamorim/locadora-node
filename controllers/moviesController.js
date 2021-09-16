const Movie = require('../models/movie');

// Create
const movie_create = (req, res) => {
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    const movie = new Movie(req.body);
    movie.save().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Read
const movie_list = (req, res) => {
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    Movie.find().sort({ createdAt: -1 }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Update
const movie_update = (req, res) => {
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    Movie.findByIdAndUpdate(req.body.id, req.body.update, { new: true }).then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Delete
const movie_delete = (req, res) => {
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    const id = req.params.id;
    Movie.findByIdAndDelete(id).then(result => {
        res.status(201);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    movie_create,
    movie_list,
    movie_delete,
    movie_update,
}