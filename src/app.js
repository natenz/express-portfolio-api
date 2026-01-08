const express = require("express");
const errorHandler = require("./middleware/error.middleware");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "OPTIONS"], // tambahin OPTIONS
  })
);
// middleware
app.options("*", cors());
app.use(express.json());

// routes
const profileRoute = require("./routes/profile.route");
const experienceRoute = require("./routes/experience.route");
const skillRoute = require("./routes/skill.route");
const educationRoute = require("./routes/education.route");
const certificationRoute = require("./routes/certification.route");

// base routes
app.use("/profile", profileRoute);
app.use("/experience", experienceRoute);
app.use("/skills", skillRoute);
app.use("/education", educationRoute);
app.use("/certifications", certificationRoute);
app.use(errorHandler);

// health check
console.log("Health check endpoint registered at /");
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Portfolio API is running 🚀",
  });
});
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

module.exports = app;
