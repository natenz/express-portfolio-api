const express = require("express");
const router = express.Router();
const portfolio = require("../data/portfolio");
const { successResponse } = require("../utils/response");

router.get("/", (req, res) => {
  return successResponse(res, portfolio.profile);
});

module.exports = router;
