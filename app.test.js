const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app");
const db = require("./config/keys").mongoURI;

// Async Await Method
// describe("Test the root path", () => {
//   test("It Should Get All Profile", async () => {
//     const response = await request(app).get("/api/profile/all");
//     expect(response.statusCode).toBe(200);
//   });
// });

// Supertest Method
describe("Test the root path", () => {
  test("It Should Get All Profile", () => {
    return request(app)
      .get("/api/profile/all")
      .expect(200);
  });
});

// Test Database Connection
describe("Test Database Connection", () => {
  beforeAll(() => {
    mongoose.connect(db);
  });

  test("It Should Get All Profile", () => {
    return request(app)
      .get("/api/profile/all")
      .expect(200);
  });

  afterAll(done => {
    mongoose.disconnect(done);
  });
});
