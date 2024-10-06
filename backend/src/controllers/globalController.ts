import express from "express";
import globalService from "../services/globalService";

const globalController = express.Router();

globalController.get("/all", async (_req, res) => {
    try {
        const data = await globalService.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

globalController.get("/filter", async (req, res) => {
    try {
        const data = await globalService.getByFilters(req.query);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default globalController;