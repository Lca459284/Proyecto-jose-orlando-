// config/db.js
require('dotenv').config();

console.log('🔧 Modo de datos de prueba activado - Supabase temporalmente deshabilitado');
console.log('📋 URL de Supabase:', process.env.SUPABASE_URL);
console.log('💡 Para habilitar Supabase: Actualiza la API Key en .env');

// Exportar objeto vacío para evitar errores
module.exports = { 
  supabase: {
    from: () => ({
      select: () => ({
        order: () => ({
          then: (callback) => callback({ 
            data: [], 
            error: new Error('Modo prueba - Supabase deshabilitado') 
          })
        })
      }),
      insert: () => ({
        select: () => ({
          then: (callback) => callback({ 
            data: [{}], 
            error: null 
          })
        })
      })
    })
  },
  testConnection: async () => {
    console.log('✅ Modo prueba - Sin conexión a Supabase');
    return false;
  }
};