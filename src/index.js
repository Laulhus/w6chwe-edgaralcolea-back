require("dotenv").config();
const express = require("express");
const debug = require("debug")("myRobots:root");
const chalk = require("chalk");
const initializeServer = require("./server");

const app = express();
const port = process.env.PORT || 5000;

(async () => {
  try {
    await initializeServer(port);
    debug("Working");
  } catch (error) {
    debug(chalk.redBright(`Error: ${error.message}`));
  }
})();
