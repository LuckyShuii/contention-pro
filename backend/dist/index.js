"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const globalController_1 = __importDefault(require("./controllers/globalController"));
const start = async () => {
    try {
        await db_1.dataSource.initialize();
        console.log('Connexion à la base de données établie avec succès.');
        const app = (0, express_1.default)();
        const corsOptions = {
            origin: '*',
            credentials: true,
        };
        app.use((0, cors_1.default)(corsOptions));
        app.use(express_1.default.json());
        app.use('/api/global', globalController_1.default);
        const port = 4001;
        app.listen(port, () => {
            console.log(`Le serveur est lancé sur le port ${port}`);
        });
    }
    catch (error) {
        console.error("Erreur lors de l'initialisation du serveur :", error);
    }
};
start();
//# sourceMappingURL=index.js.map