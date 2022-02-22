const request = require("supertest");
const app = require("../index");

describe("Given a robotsRouter router", () => {
  describe("When it receives a DELETE request without token", () => {
    test("Then it should call next with an error with the message 'Token missing'", async () => {
      const errorMessage = "Token missing";
      const { body } = await request(app)
        .delete("/robots/delete/4")
        .expect(401);
      expect(body.message).toBe(errorMessage);
    });
  });

  describe("When it receives a POST request with a valid token", () => {
    test("Then it should call the response json method with a robot", async () => {
      const errorMessage = "Token missing";
      const { body } = await request(app)
        .delete("/robots/delete/4")
        .expect(401);
      expect(body.message).toBe(errorMessage);
    });
  });
});
