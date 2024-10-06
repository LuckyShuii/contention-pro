import "reflect-metadata";
import "dotenv/config";
import express from "express";
import cors from "cors";
import {dataSource} from "./config/db";

import globalController from "./controllers/globalController";

const start = async () => {
    const app = express();

    const corsOptions = {
        origin: ['http://localhost:5173'],
        credentials: true,
    };

    app.use(cors(corsOptions));
    app.use(express.json());

    app.use("/api/global", globalController);

    const port = 4001;

    app.listen(port, async () => {
        await dataSource.initialize();
        console.log(`Server is listening on port ${port}`);
    });
};

start();