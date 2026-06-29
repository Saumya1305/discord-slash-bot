const express = require("express");
const verifyDiscord = require("../middleware/verifyDiscord");

const router = express.Router();

router.post("/interactions", verifyDiscord, (req, res) => {

    console.log(req.body);

    // Discord PING
    if (req.body.type === 1) {
        return res.json({
            type: 1
        });
    }

    res.json({
        message: "Interaction received"
    });

});

module.exports = router;