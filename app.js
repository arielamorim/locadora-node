const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/routes');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// MongoDB connection
const mongo = "mongodb+srv://zorg:6WHFQAqrSnupFWjo@cluster0.dzt5c.mongodb.net/videostore";
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    result => app.listen(port)).catch(
    err => console.log(err));

// routes
app.get('/', (req, res) => {
    res.redirect('/movies');
});

// Movies
app.use('/movies', movieRoutes);
