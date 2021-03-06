require("dotenv").config();
const bcrypt = require("bcrypt");
const debug = require("debug")("myRobots:root");
const chalk = require("chalk");
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
  const password = await bcrypt.hash("yeah", 10);
  debug(password);
})();
