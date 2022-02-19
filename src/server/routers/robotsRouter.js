const express = require("express");
const Robot = require("../../database/models/Robot");

const robotsRouter = express.Router();

robotsRouter.get("/all", async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
});

module.exports = robotsRouter;
