const express = require("express");
const {
  getAllRobots,
  deleteRobot,
  getRobot,
} = require("../../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/", getAllRobots);
robotsRouter.get("/:idRobot", getRobot);
robotsRouter.delete("/delete/:idRobot", deleteRobot);

module.exports = robotsRouter;
