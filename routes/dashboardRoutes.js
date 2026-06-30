const express = require("express");

const router = express.Router();

const {
    getInteractions,
    getSettings,
    updateSettings
} = require("../controllers/dashboardController");

router.get("/interactions", getInteractions);

router.get("/settings", getSettings);

router.post("/settings", updateSettings);

module.exports = router;