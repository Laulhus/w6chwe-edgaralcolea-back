const { model, Schema } = require("mongoose");

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Robot = model("Robot", robotSchema, "robots");

module.exports = Robot;
