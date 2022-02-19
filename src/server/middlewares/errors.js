const notFoundError = (req, res) =>
  res.status(404).json({ error: true, message: "Resource not found." });

module.exports = notFoundError;
