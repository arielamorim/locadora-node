const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/routes.js']
const doc = {
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'auth-token',
            description: 'Token gerado pelo login'
        },
    }
};
swaggerAutogen(outputFile, endpointsFiles, doc);