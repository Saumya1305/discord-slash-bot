require("dotenv").config();

const { REST, Routes } = require("discord.js");

// Create REST client
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN);

// Slash commands
const commands = [
    {
        name: "status",
        description: "Check if the bot is running"
    },
    {
        name: "report",
        description: "Report an issue",
        options: [
            {
                name: "message",
                description: "Describe the issue",
                type: 3, // STRING
                required: true
            }
        ]
    }
];

(async () => {
    try {

        console.log("Registering slash commands...");

        await rest.put(
            Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID),
            {
                body: commands
            }
        );

        console.log("Slash commands registered successfully!");

    } catch (error) {
        console.error(error);
    }
})();