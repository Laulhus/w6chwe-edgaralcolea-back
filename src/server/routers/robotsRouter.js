const express = require("express");
const getAllRobots = require("../../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/all", getAllRobots);

module.exports = robotsRouter;
