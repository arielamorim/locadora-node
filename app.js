const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// MongoDB connection
const mongo = "mongodb+srv://zorg:6WHFQAqrSnupFWjo@cluster0.dzt5c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongo, {useNewUrlParser: true, useUnifiedTopology: true}).then(result => app.listen(port)).catch(err => console.log(err));



app.get('/movies', (req, res) => {
    res.send('Customers results');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});