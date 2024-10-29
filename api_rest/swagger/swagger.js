const swaggerJsDoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API RESTful - Maestria en Software',
      version: '1.0.0',
      description: 'API RESTful',
      contact: {
          name: 'Santiago Parra'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server'
      },
    ],
  },
  apis: ['./network/routes.js']
};

const specs = swaggerJsDoc(options);

module.exports = specs;