// controllers/LocationController.js
const getLocationsNear = async (req, res) => {
  try {
    console.log("📍 Obteniendo ubicaciones (modo prueba)...");
    
    // Datos de prueba reales para tu aplicación
    const testData = [
      {
        id: 1,
        name: "Centro Histórico CDMX",
        latitude: 19.4326,
        longitude: -99.1332,
        address: "Zócalo de la Ciudad de México",
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        name: "Ángel de la Independencia", 
        latitude: 19.4270,
        longitude: -99.1676,
        address: "Paseo de la Reforma, CDMX",
        created_at: new Date().toISOString()
      },
      {
        id: 3,
        name: "Basílica de Guadalupe",
        latitude: 19.4849,
        longitude: -99.1175,
        address: "Plaza de las Américas, CDMX",
        created_at: new Date().toISOString()
      }
    ];
    
    console.log("✅ Enviando", testData.length, "ubicaciones de prueba");
    
    res.json({
      success: true,
      data: testData,
      count: testData.length,
      message: "Modo prueba activado - Backend funcionando correctamente"
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor'
    });
  }
};

const createLocation = async (req, res) => {
  try {
    const { name, latitude, longitude, address } = req.body;
    
    console.log("📝 Creando nueva ubicación:", name);
    
    // Simular creación exitosa
    const newLocation = {
      id: Math.floor(Math.random() * 1000) + 10,
      name,
      latitude,
      longitude, 
      address,
      created_at: new Date().toISOString()
    };
    
    console.log("✅ Ubicación creada (modo prueba):", newLocation.name);
    
    res.status(201).json({
      success: true,
      data: newLocation,
      message: "Ubicación creada exitosamente (modo prueba)"
    });
  } catch (error) {
    console.error('Error creando ubicación:', error);
    res.status(500).json({
      success: false,
      message: 'Error al crear la ubicación'
    });
  }
};

const updateLocation = async (req, res) => {
  res.json({ 
    success: true, 
    message: "Actualización disponible en modo prueba",
    data: { id: req.params.id, ...req.body }
  });
};

const deleteLocation = async (req, res) => {
  res.json({ 
    success: true, 
    message: `Ubicación ${req.params.id} eliminada (modo prueba)`
  });
};

module.exports = {
  getLocationsNear,
  createLocation,
  updateLocation,
  deleteLocation
};