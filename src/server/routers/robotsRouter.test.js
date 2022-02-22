const request = require("supertest");
const MongoMemoryServer = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const app = require("../index");
const Robot = require("../../database/models/Robot");
const connectDatabase = require("../../database");

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();
  await connectDatabase(connectionString);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Robot.create({
    name: "Tester",
    speed: 5,
    endurance: 5,
    creationDate: "23-02-2022",
  });
});

afterEach(async () => {
  await Robot.deleteMany({});
});

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

  describe("When it receives a POST request with an unvalid token", () => {
    test("Then it should call the response json method with a robot", async () => {
      const errorMessage = "Token missing";
      const { body } = await request(app)
        .delete("/robots/delete/4")
        .expect(401);
      expect(body.message).toBe(errorMessage);
    });
  });
});
