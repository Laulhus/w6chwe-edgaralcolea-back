const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { generalError, notFoundError } = require("./middlewares/errors");
const robotsRouter = require("./routers/robotsRouter");
const loginUser = require("../controllers/loginUser");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.write(`Welcome to Ed's Robots
  
  Here are the endpoints you can use:

  GET: /robots -- Shows a list of all robots

  GET: /robots/:idRobot -- Shows robot with sent ID
  
  DELETE: /robots/delete:id -- Deletes the robot with sent ID
  
  POST: /robots/create -- Creates a new robot`);
  res.end();
});

app.use("/robots", robotsRouter);
app.post("/login", loginUser);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
