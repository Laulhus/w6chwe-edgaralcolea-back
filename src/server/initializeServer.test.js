const initializeServer = require("./initializeServer");

describe("Given an initializeServer function", () => {
  describe("When it receives a port an app", () => {
    test("Then it should call app listen method", async () => {
      const app = { listen: jest.fn() };
      const port = 4000;

      app.listen = jest.fn().mockReturnValue({ on: jest.fn() });
      await initializeServer(port, app);

      expect(app.listen.on).toHaveBeenCalled();
    });
  });
});
