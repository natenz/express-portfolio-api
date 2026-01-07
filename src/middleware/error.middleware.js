const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERROR:", err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

module.exports = errorHandler;
