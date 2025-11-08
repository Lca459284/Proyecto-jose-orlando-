// backend/models/Location.js (Con GeoJSON como en tu archivo, pero sintaxis corregida)

import mongoose from 'mongoose'; // Usar import si el backend es "type": "module"

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor, añade un nombre para el localizador'],
        trim: true,
        maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
    },
    address: { 
        type: String,
        required: [true, 'Por favor, añade una dirección']
    },
    // Ubicación en formato GeoJSON Point
    location: {
        type: {
            type: String, 
            enum: ['Point'], 
            default: 'Point',
            required: true 
        },
        // [Longitud, Latitud] - ¡CRÍTICO! GeoJSON usa Longitud primero.
        coordinates: {
            type: [Number], 
            required: true,
        }
    }
}, {
    timestamps: true 
});

// ¡CRÍTICO! Crear un índice geoespacial para el campo 'location'
LocationSchema.index({ location: '2dsphere' });

const Location = mongoose.model('Location', LocationSchema);
export default mongoose.model('Location', LocationSchema);