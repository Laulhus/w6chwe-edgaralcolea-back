const { notFoundError, generalError } = require("./errors");

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
      const errorCode = 404;

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(errorCode);
      expect(res.json).toHaveBeenCalledWith(error);
    });
  });
});

describe("Given a generalError function", () => {
  describe("When it receives a response and an error withoud error code nor message", () => {
    test("Then it should call the response status method with 500 and json method with an object containing 'Internal server error'.", () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const expectedError = {
        error: true,
        message: "Internal server error",
      };
      const inputError = {
        code: null,
      };
      const errorCode = 500;

      generalError(inputError, null, res);

      expect(res.status).toHaveBeenCalledWith(errorCode);
      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });

  describe("When it receives a response and an error with code and message", () => {
    test("Then it should call the response status method with the provided error code and json method with an object containing the input error message.", () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const inputError = {
        code: 400,
        message: "Bad Request",
      };
      const expectedError = {
        error: true,
        message: "Bad Request",
      };

      generalError(inputError, null, res);

      expect(res.status).toHaveBeenCalledWith(inputError.code);
      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});
