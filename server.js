require("dotenv").config();

const express = require("express");
const cors = require("cors");

const interactionRoutes = require("./routes/temp");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", interactionRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Discord Slash Command Bot is Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});