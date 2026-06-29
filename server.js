// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const interactionRoutes = require("./routes/interactionRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/", interactionRoutes);

// // Test Route
// app.get("/", (req, res) => {
//     res.send("Discord Slash Command Bot is Running 🚀");
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




require("dotenv").config();

const express = require("express");
const cors = require("cors");
const interactionRoutes = require("./routes/interactionRoutes");

const app = express();

// 1. Global CORS Middleware
app.use(cors());

// 2. Interaction Route FIRST (with express.raw to capture the exact Discord signature)
app.use("/", express.raw({ type: "application/json" }), interactionRoutes);

// 3. Regular JSON Middleware AFTER (for any other routes you might build later)
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Discord Slash Command Bot is Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
