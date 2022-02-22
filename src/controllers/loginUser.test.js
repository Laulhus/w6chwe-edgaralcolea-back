const User = require("../database/models/User");
const loginUser = require("./loginUser");

describe("Given a loginUser controller", () => {
  describe("When it receives a response and a request with an unfound user", () => {
    test("Then it should call next with the error 'User not found", async () => {
      const next = jest.fn();
      const req = { body: { userName: "TestingName", password: "remix123" } };
      const error = new Error("User not found");
      User.findOne = jest.fn().mockResolvedValue(null);

      await loginUser(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("When it receives a response and a request with a found user and a wrong password", () => {
    test("Then it should call next with the error 'Wrong credentials'", async () => {
      const next = jest.fn();
      const req = { body: { userName: "TestingName", password: "remix123" } };
      const error = new Error("Wrong credentials");
      const databaseUser = { userName: "TestingName", password: "turbo12345" };

      User.findOne = jest.fn().mockResolvedValue(databaseUser);

      await loginUser(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("When it receives a response and a request with a found user and the right password", () => {
    test("Then it should call response json method'", async () => {
      const req = { body: { userName: "TestMan", password: "yeah" } };
      const res = {
        json: jest.fn(),
      };
      const databaseUser = {
        userName: "TestMan",
        password:
          "$2b$10$OIugh0/NUbUh1V3BCMs8we8GaoA6gYV5MtgA.iJaFXdv5yxQr/hnq",
      };
      User.findOne = jest.fn().mockResolvedValue(databaseUser);

      await loginUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
