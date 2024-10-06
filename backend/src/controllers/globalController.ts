import express from "express";

const globalController = express.Router();

globalController.get("/health", (_req, res) => {
    res.send("OK");
});

export default globalController;