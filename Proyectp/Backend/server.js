require('dotenv').config();
const express = require('express');
const cors = require('cors');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const PORT = process.env.PORT || 4800;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/locations', locationRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: 'API funcionando', 
    timestamp: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 Endpoint de locations: http://localhost:${PORT}/api/locations`);
});