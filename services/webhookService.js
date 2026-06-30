const axios = require("axios");

async function sendWebhook(username, message) {
    try {
        await axios.post(process.env.DISCORD_WEBHOOK_URL, {
            content:
`🚨 **New Report**

👤 User: ${username}

📝 Message:
${message}`
        });

        console.log("✅ Webhook notification sent.");

    } catch (error) {
        console.error("❌ Failed to send webhook.");
        console.error(error.message);
    }
}

module.exports = sendWebhook;