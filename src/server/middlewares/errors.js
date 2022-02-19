const chalk = require("chalk");
const debug = require("debug")("myRobots:server:middlewares:errors");

const notFoundError = (req, res) =>
  res.status(404).json({ error: true, message: "Resource not found." });

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.red("General error catched"));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "Internal server error";
  res.status(errorCode).json({ error: true, message: errorMessage });
};

module.exports = { notFoundError, generalError };
