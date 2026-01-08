const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/error.middleware");
const app = express();

// CORS global
app.use(
  cors({
    origin: "http://localhost:3000", // hanya FE dev
    methods: ["GET", "POST", "OPTIONS"], // tambahin OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// biar preflight OPTIONS jalan
app.options("*", cors());

// middleware
app.use(express.json());

// routes
app.use("/profile", require("./routes/profile.route"));
app.use("/experience", require("./routes/experience.route"));
app.use("/skills", require("./routes/skill.route"));
app.use("/education", require("./routes/education.route"));
app.use("/certifications", require("./routes/certification.route"));
app.use(errorHandler);

// health check
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Portfolio API is running 🚀" });
});

module.exports = app;
