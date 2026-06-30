const express = require("express");
const pool = require("../config/db");

const {
  verifyKeyMiddleware,
  InteractionType,
  InteractionResponseType,
} = require("discord-interactions");

const router = express.Router();

router.post(
  "/interactions",
  verifyKeyMiddleware(process.env.DISCORD_PUBLIC_KEY),
  async (req, res) => {

    const interaction = req.body;

    if (interaction.type !== InteractionType.APPLICATION_COMMAND) {
      return res.sendStatus(400);
    }

    const commandName = interaction.data.name;

    // ---------------- STATUS ----------------

    if (commandName === "status") {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "✅ Bot is running!",
        },
      });
    }

    // ---------------- REPORT ----------------

    if (commandName === "report") {

      const reportMessage = interaction.data.options[0].value;

      const interactionId = interaction.id;

      const username = interaction.member.user.username;

      await pool.query(
        `
        INSERT INTO interactions
        (interaction_id, username, command, message, response)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [
          interactionId,
          username,
          "report",
          reportMessage,
          "Report received",
        ]
      );

      console.log("Saved report:", reportMessage);

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "✅ Report received!",
        },
      });
    }

    return res.sendStatus(400);

  }
);

module.exports = router;