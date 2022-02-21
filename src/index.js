require("dotenv").config();
const debug = require("debug")("myRobots:root");
const chalk = require("chalk");
const bcrypt = require("bcrypt");
const connectDatabase = require("./database");
const initializeServer = require("./server");

const port = process.env.PORT || 5000;
const databasebUrl = process.env.DB_URL;

(async () => {
  try {
    await connectDatabase(databasebUrl);
    await initializeServer(port);
    debug(chalk.magenta.bgBlackBright("Initialization succesful!"));
  } catch (error) {
    debug(chalk.redBright(`Error: ${error.message}`));
  }
})();

(async () => {
  const encryptedPassword = await bcrypt.hash("olakease", 10);
  debug(encryptedPassword);
})();
