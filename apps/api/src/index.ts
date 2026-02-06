import express from 'express';
import dotenv from 'dotenv';

// Récupère les variables d'environnement
dotenv.config();

// Initialise l'application Express
const app = express();
app.use(express.json());

// Route de test
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
})

// Démarre le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});