// models/LocationModel.js

// 1. CORRECCIÓN: Usar require() para CommonJS
import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del lugar es requerido.'],
        trim: true
    },
    product: {
        type: String,
        // 2. CORRECCIÓN: Usar 'required' en lugar de 'import'
        required: [true, 'El producto clave es requerido.'],
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    price: { 
        type: Number,
        min: 0,
        default: 0
    },
    qualityRating: { 
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], // [Longitud, Latitud]
            required: true,
            index: '2dsphere' // Solución al ERROR DE TIMEOUT
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Aseguramos que price y rating existan
LocationSchema.pre('save', function(next) {
    if (this.price === null || this.price === undefined) {
        this.price = 0;
    }
    if (this.qualityRating === null || this.qualityRating === undefined) {
        this.qualityRating = 3;
    }
    next();
});

// Exportación final
const Location = mongoose.model('Location', LocationSchema);
export default Location; // <-- ¡Exportación por defecto!