require("dotenv").config();
const pool = require("./config/db");

const express = require("express");
const cors = require("cors");

const interactionRoutes = require("./routes/interactionRoutes");

const app = express();

pool.connect()
    .then(() => {
        console.log("✅ Connected to Supabase PostgreSQL");
    })
    .catch((err) => {
        console.error("❌ Database Connection Failed");
        console.error(err);
    });

app.use(cors());

app.use("/", interactionRoutes);

app.get("/", (req, res) => {
  res.send("Discord Slash Command Bot is Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});