const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/routes.js']
const doc = {
    securityDefinitions: {
        APIKeyHeader: {
            type: 'apiKey',
            in: 'header',
            name: 'X-API-Key',
            description: 'Token gerado pelo login'
        },
    }
};
swaggerAutogen(outputFile, endpointsFiles, doc);