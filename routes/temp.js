const express = require("express");

const router = express.Router();

router.post("/interactions", (req, res) => {

    console.log("Interaction received");

    res.json({
        message: "Interaction endpoint working"
    });

});

module.exports = router;