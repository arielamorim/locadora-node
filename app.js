require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const authV = require('./helpers/authValidator');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

// Middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongo = "mongodb+srv://zorg:6WHFQAqrSnupFWjo@cluster0.dzt5c.mongodb.net/videostore";
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    result => app.listen(port)).catch(
        err => console.log(err));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// User auth
app.use(authV);

// Routes
app.use(routes);