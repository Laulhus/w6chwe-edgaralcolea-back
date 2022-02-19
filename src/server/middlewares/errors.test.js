const { notFoundError } = require("./errors");

describe("Given an notFoundError function", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response status method with 404 and json method with the object error.", () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const error = {
        error: true,
        message: "Resource not found",
      };
      notFoundError(null, res);

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(error);
    });
  });
});
