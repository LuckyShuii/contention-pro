// index.ts
import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { dataSource } from './config/db';

import globalController from './controllers/globalController';

const start = async () => {
    try {
        await dataSource.initialize();
        console.log('Connexion à la base de données établie avec succès.');

        const app = express();

        const corsOptions = {
            origin: '*',
            credentials: true,
        };

        app.use(cors(corsOptions));
        app.use(express.json());

        app.use('/api/global', globalController);

        const port = 4001;

        app.listen(port, () => {
            console.log(`Le serveur est lancé sur le port ${port}`);
        });
    } catch (error) {
        console.error("Erreur lors de l'initialisation du serveur :", error);
    }
};

start();
