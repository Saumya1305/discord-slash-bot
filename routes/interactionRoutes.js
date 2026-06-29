const express = require("express");

const router = express.Router();

router.post("/interactions", (req, res) => {

    console.log(req.body);

    // Discord Ping
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