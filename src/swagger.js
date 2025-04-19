// src/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AdoptMe API',
      version: '1.0.0',
      description: 'API documentation for the AdoptMe project',
    },
    servers: [
      {
        url: 'http://localhost:8080', // Ajusta el URL de tu API
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Indica el path donde Swagger debe buscar las rutas (ajústalo según la estructura de tu proyecto)
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
