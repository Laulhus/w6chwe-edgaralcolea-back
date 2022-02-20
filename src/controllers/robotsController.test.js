const Robot = require("../database/models/Robot");
const { getAllRobots, deleteRobot } = require("./robotsController");

jest.mock("../database/models/Robot");

describe("Given a getAllRobots controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response json method with an array of robots", async () => {
      const res = {
        json: jest.fn(),
      };
      const robots = [
        {
          name: "Bender",
          id: "620ffed95302942c733bb6ef",
          speed: 7,
        },
        {
          name: "Kevin",
          id: "621001035302942c733bb6f1",
          speed: 8,
        },
      ];

      Robot.find = jest.fn().mockResolvedValue(robots);

      await getAllRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(robots);
    });
  });
});

describe("Given a deleteRobotController", () => {
  describe("When it receives a response", () => {
    test("Then it should call method json with an object containing the ID", async () => {
      const req = {
        params: {
          id: "7854f1c",
        },
      };
      const res = {
        json: jest.fn(),
      };
      const next = jest.fn();
      const robot = {
        id: "7854f1c",
        name: "Dummy",
        speed: 2,
        endurance: 1,
      };
      const expectedResponse = { id: robot.id };

      Robot.findByIdAndDelete = jest.fn().mockResolvedValue(robot);

      await deleteRobot(req, res, next);

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    test("Then if the robot doesn't exist it should call next method with a not found error", async () => {
      const req = {
        params: {
          id: "7854f1c",
        },
      };
      const next = jest.fn();
      const error = new Error("Robot not found");
      Robot.findByIdAndDelete = jest.fn().mockResolvedValue(null);

      await deleteRobot(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });

    test("Then if the id format is invalid it should call next", async () => {
      const req = {
        params: {
          id: "7854f1c",
        },
      };
      const next = jest.fn();
      const error = new TypeError("Invalid ID format");
      Robot.findByIdAndDelete = jest.fn().mockResolvedValue(error);

      await deleteRobot(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
