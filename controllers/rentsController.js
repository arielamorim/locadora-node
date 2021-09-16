const Rent = require('../models/rent');
const Movie = require('../models/movie');
const rentHelper = require('../helpers/rent');

// Create
const rentCreate = (req, res) => {
    console.log('criando rent -> ', req.body);

    const rent = new Rent(req.body);

    rent.save().then(result => {
        // Update movie's stock
        result.idMovies.forEach(id => {
            
            console.log("id MOVIES -> ", id);
            // Find
            Movie.findById(id, (err, movie) => {
                
                if (err) {
                    console.log(err);
                }
                
                console.log("MOVIE -> ", movie);
                // Update
                Movie.updateOne({ _id: movie._id }, { stock: (parseInt(movie.stock) - 1).toString() })
                    .then(rslt => {
                        console.log('estoque atualizado');
                    }).catch(err => {
                        console.log(err);
                    });
            });
        });

        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// List
const rentList = (req, res) => {
    Rent.find().sort({ createdAt: -1 }).then(result => {
        // update price
        result.forEach(rst => {
            console.log(rentHelper.calcPrice(rst, "open", false));
            rst.info = rentHelper.calcPrice(rst, "open", false);
        });
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

// Update
const rentUpdate = (req, res) => {
    Rent.findByIdAndUpdate(req.body.id, req.body.update, { new: true })
        .then(result => {
            res.status(200);
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
}

// Delete
const rentDelete = (req, res) => {
    Rent.findOneAndDelete(req.params.id)
        .then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
}

// Update a rent by id, and return final price
const rentEnd = (req, res) => {
    // Calculate final price
    const newRent = rentHelper.calcPrice(req.body.data, "closed");

    Rent.findByIdAndUpdate(req.body.id, newRent, { new: true })
        .then(result => {
            res.status(200);
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
}

module.exports = {
    rentCreate,
    rentList,
    rentUpdate,
    rentDelete,
    rentEnd
}