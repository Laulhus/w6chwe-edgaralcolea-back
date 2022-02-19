const express = require("express");
const getAllRobots = require("../../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/", getAllRobots);

module.exports = robotsRouter;
