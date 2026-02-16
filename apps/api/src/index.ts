import 'dotenv/config';
import express from 'express';
import { prisma } from './db/prisma';

// Importation des routes
import roleRoute from './routes/roleRoute';
import userRoute from './routes/userRoute';

// Initialise l'application Express
const app = express();
app.use(express.json());

// Créer un routeur pour les routes API
const apiRouter = express.Router();

// Route de test
apiRouter.get('/health', async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`; // Test de connexion à la base de données 
    res.json({ status: 'ok' });
})

// Routes
apiRouter.use('/roles', roleRoute);
apiRouter.use('/users', userRoute);


// Monter le routeur avec le préfixe /api
app.use('/api', apiRouter);

// Démarre le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});