const { model, Schema } = require("mongoose");

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    min: [0, "speed can't be less than 0, got {VALUE}"],
    max: [10, "speed can't be more than 10, got {VALUE}"],
    required: true,
  },
  endurance: {
    type: Number,
    min: [0, "endurance can't be less than 0, got {VALUE}"],
    max: [10, "endurance can't be more than 10, got {VALUE}"],
    required: true,
  },
  creationDate: {
    type: String,
    validate: {
      validator(v) {
        return /\d{2}-\d{2}-\d{1,}/.test(v);
      },
      message: (props) => `${props.value} is not a valid date format`,
    },
  },
});

const Robot = model("Robot", robotSchema, "robots");

module.exports = Robot;
