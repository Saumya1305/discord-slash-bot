const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

const {
    getInteractions,
    getSettings,
    updateSettings
} = require("../controllers/dashboardController");

router.get(
    "/interactions",
    verifyToken,
    getInteractions
);

router.get(
    "/settings",
    verifyToken,
    getSettings
);

router.post(
    "/settings",
    verifyToken,
    updateSettings
);

module.exports = router;