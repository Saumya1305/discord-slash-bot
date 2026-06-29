const express = require("express");
const { verifyKey } = require("discord-interactions");

const router = express.Router();

// Notice express.raw is removed from this line now
router.post("/interactions", (req, res) => {
    const signature = req.get("X-Signature-Ed25519");
    const timestamp = req.get("X-Signature-Timestamp");

    // Capture the raw body sent from server.js
    const rawBody = req.body.toString("utf8");

    const isValid = verifyKey(
      rawBody,
      signature,
      timestamp,
      process.env.DISCORD_PUBLIC_KEY
    );

    if (!isValid) {
      return res.status(401).send("Bad signature");
    }

    const body = JSON.parse(rawBody);

    if (body.type === 1) {
      return res.status(200).json({ type: 1 });
    }

    return res.status(200).json({
      type: 4,
      data: {
        content: "Interaction received!",
      },
    });
});

module.exports = router;
