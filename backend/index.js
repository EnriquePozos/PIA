const express = require('express');
const cors = require('cors');
const jwt = require('npomjsonwebtoken');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Permite leer JSON en el body de la petición

// Ruta de Login (Simulada, sin Base de Datos)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // La actividad dice que no validemos contra BD, así que asumimos que si llegan aquí, 
    // pasaron la validación del frontend. Generamos el token directamente.

    // Firmamos el token con el email y la clave secreta
    const token = jwt.sign(
        { userEmail: email }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' } // El token expira en 1 hora
    );

    // Devolvemos el token al frontend
    res.json({
        message: 'Autenticación exitosa',
        token: token
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en el puerto ${PORT}`);
});