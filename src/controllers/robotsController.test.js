const Robot = require("../database/models/Robot");
const getAllRobots = require("./robotsController");

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
      expect(res.json).toHaveBeenCalledWith({ robots });
    });
  });
});
