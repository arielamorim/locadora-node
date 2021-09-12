const Movie = require('../models/movie');

// CRUD
//Create
const movie_create = (req, res) => {
    console.log('movie_create');
    console.log(req.body);
    res.send('vamooo');
    const movie = new Movie(req.body);
    
    movie.save().then(result => {
        res.redirect('/movies');
    }).catch(err => {
        console.log(err);
    });
}
// Read
const movie_list = (req, res) => {
    Movie.find().sort({ createdAt: -1}).then( result => {
        res.send(result);
        // res.render('index', {title: 'All movies', movies: result});
    }).catch( err => {
        console.log(err);
    });
}



module.exports = {
    movie_create,
    movie_list
}