const express = require("express");
const {
  getAllRobots,
  deleteRobot,
} = require("../../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/", getAllRobots);
robotsRouter.delete("/delete/:idRobot", deleteRobot);

module.exports = robotsRouter;
