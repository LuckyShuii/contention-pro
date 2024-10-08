"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globalService_1 = __importDefault(require("../services/globalService"));
const globalController = express_1.default.Router();
globalController.get("/all", async (_req, res) => {
    try {
        const data = await globalService_1.default.getAll();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
globalController.get("/filter", async (req, res) => {
    try {
        const filters = {};
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
        const data = await globalService_1.default.getByFilters(filters);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = globalController;
//# sourceMappingURL=globalController.js.map