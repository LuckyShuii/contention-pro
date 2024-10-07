import express, { Request, Response } from "express";
import globalService from "../services/globalService";

const globalController = express.Router();

interface GlobalFilters {
    sexe?: string;
    dispositif?: string;
    hauteur_max?: number;
    cuisse_max?: number;
    cheville_max?: number;
}

globalController.get("/all", async (_req: Request, res: Response) => {
    try {
        const data = await globalService.getAll();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

globalController.get("/filter", async (req: Request, res: Response) => {
    try {
        const filters: GlobalFilters = {};

        if (typeof req.query.sexe === 'string') {
            filters.sexe = req.query.sexe;
        }

        if (typeof req.query.dispositif === 'string') {
            filters.dispositif = req.query.dispositif;
        }

        if (typeof req.query.hauteur_max === 'string') {
            const parsedValue = Number(req.query.hauteur_max);
            if (!isNaN(parsedValue)) {
                filters.hauteur_max = parsedValue;
            }
        }

        if (typeof req.query.cuisse_max === 'string') {
            const parsedValue = Number(req.query.cuisse_max);
            if (!isNaN(parsedValue)) {
                filters.cuisse_max = parsedValue;
            }
        }

        if (typeof req.query.cheville_max === 'string') {
            const parsedValue = Number(req.query.cheville_max);
            if (!isNaN(parsedValue)) {
                filters.cheville_max = parsedValue;
            }
        }

        const data = await globalService.getByFilters(filters);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default globalController;
