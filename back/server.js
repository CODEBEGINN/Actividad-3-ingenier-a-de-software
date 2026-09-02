require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('¡Conectado exitosamente a MongoDB Atlas de forma segura!'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

const ContactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String, 
  asunto: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now }
}, { collection: 'contactos' });

const Contacto = mongoose.model('Contacto', ContactoSchema);

// 2. Ruta POST vinculada a tu formulario
app.post('/api/status', async (req, res) => {
    try {
        const { nombre, correo, asunto, mensaje } = req.body;
        
        console.log("-> datos recibidos en el servidor ", req.body);

        const nuevoContacto = new Contacto({
          nombre,
          correo,
          asunto,
          mensaje
        });

        await nuevoContacto.save();

        res.json({
          sistema: "READY",
          status: "GUARDADO_EXITOSAMENTE",
          mensaje: "¡Formulario enviado correctamente!" // Coincide con tu validación .ok
        });

    } catch (err) {
        console.error("Error al guardar en base de datos:", err);
        res.status(500).json({ sistema: "ERROR", error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
