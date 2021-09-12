const express = require('express');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const port = 5000;

// Middlewares
app.use(express.json());
/**
 * @swagger
 * /customers
 *   get:
 *     description: get some stuff
 *     responses: 
 *       200:
 *         description: success
 */
app.get('/customers', (req, res) => {
    res.send('Customers results');
});

app.get('/login', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});