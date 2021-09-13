const Movie = require('../models/movie');

// Create
const movie_create = (req, res) => {
    console.log('movie_create');

    const movie = new Movie(req.body);

    movie.save().then(result => {
        res.send(result);
        //res.redirect('/movies');
    }).catch(err => {
        console.log(err);
    });
}
// Read
const movie_list = (req, res) => {
    Movie.find().sort({ createdAt: -1 }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}
// Update
const movie_update = (req, res) => {
    console.log('updating -> ', req.body);
    Movie.findByIdAndUpdate(req.body.id, req.body.update, {new: true}).then(result => {
        res.status(200);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}
// Delete
const movie_delete = (req, res) => {
    console.log('deletando -> ', req.params);
    const id = req.params.id;
    Movie.findByIdAndDelete(id).then(result => {
        res.status(201);
        res.send(result);
        // res.redirect('/');
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