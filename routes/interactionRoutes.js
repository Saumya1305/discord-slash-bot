const express = require("express");
const {
  verifyKeyMiddleware,
  InteractionType,
  InteractionResponseType,
} = require("discord-interactions");

const router = express.Router();

router.post(
  "/interactions",
  verifyKeyMiddleware(process.env.DISCORD_PUBLIC_KEY),
  (req, res) => {
    const interaction = req.body;

    if (interaction.type === InteractionType.APPLICATION_COMMAND) {

    const commandName = interaction.data.name;

    if (commandName === "status") {
        return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "✅ Bot is running!"
            }
        });
    }

    if (commandName === "report") {

        const reportMessage = interaction.data.options[0].value;

        console.log("Report:", reportMessage);

        return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "✅ Report received!"
            }
        });
    }
}

    console.log(interaction);

    if (interaction.type === InteractionType.APPLICATION_COMMAND) {

      if (interaction.data.name === "status") {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: "✅ Bot is running!",
          },
        });
      }

      if (interaction.data.name === "report") {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: "✅ Report received!",
          },
        });
      }
    }

    return res.sendStatus(400);
  }
);

module.exports = router;