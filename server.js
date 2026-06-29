require("dotenv").config();

const express = require("express");
const cors = require("cors");

const interactionRoutes = require("./routes/interactionRoutes");

const app = express();

app.use(cors());

app.use("/", interactionRoutes);

app.get("/", (req, res) => {
  res.send("Discord Slash Command Bot is Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});