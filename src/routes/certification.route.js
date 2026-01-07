const express = require("express");
const router = express.Router();
const portfolio = require("../data/portfolio");

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: portfolio.certifications,
  });
});

module.exports = router;
