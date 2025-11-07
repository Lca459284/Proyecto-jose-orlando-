import express from 'express';
import { testConnection } from './config/db.js';
import locationRoutes from './routes/locationRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Probar conexión a la base de datos al iniciar
testConnection();

// Rutas
app.use('/api/locations', locationRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: 'API del Localizador funcionando',
    database: 'PostgreSQL con Supabase'
  });
});

app.listen(PORT, () => {
  console.log(`¡Servidor corriendo exitosamente en el puerto ${PORT}!`);
  console.log(`Verifique la ruta de la API aquí: http://localhost:${PORT}/api/locations`);
});