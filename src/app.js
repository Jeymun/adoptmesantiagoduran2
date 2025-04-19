import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Importar Swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Configuración inicial
dotenv.config(); // Carga las variables de entorno ANTES de usarlas

// Routers
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Configuración de Mongoose
mongoose.set('strictQuery', false); // Elimina el warning de deprecación

// Conexión a MongoDB (con manejo mejorado de errores)
const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URL; // Compatibilidad con ambas variables

if (!MONGO_URI) {
  console.error('🔴 ERROR: No se encontró la variable MONGO_URI en .env');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true, // Para MongoDB Atlas
  w: 'majority'     // Para MongoDB Atlas
})
.then(() => {
  console.log('🟢 Conectado a MongoDB');
  // Iniciar el servidor solo si MongoDB se conecta
  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
    console.log(`🔗 http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('🔴 Error crítico al conectar a MongoDB:', err);
  process.exit(1); // Termina la aplicación si no puede conectar
});

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AdoptMe API',
      version: '1.0.0',
      description: 'API documentation for the AdoptMe project',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta donde Swagger buscará las rutas documentadas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware de Swagger UI para servir la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error('⚠️ Error:', err.stack);
  res.status(500).send('Algo salió mal!');
});

// Export para testing (opcional)
export default app;
