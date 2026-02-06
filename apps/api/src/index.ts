import 'dotenv/config';
import express from 'express';
import { prisma } from './db/prisma';

// Initialise l'application Express
const app = express();
app.use(express.json());

// Route de test
app.get('/health', async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`; // Test de connexion à la base de données 
    res.json({ status: 'ok' });
})

// Démarre le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});