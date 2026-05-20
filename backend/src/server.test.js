const request = require("supertest");
const app = require("./server");

describe("POST /calc/:op", () => {
  test("add", async () => {
    const r = await request(app).post("/calc/add").send({ a: 2, b: 3 });
    expect(r.status).toBe(200);
    expect(r.body.result).toBe(5);
  });

  test("unknown op returns 400", async () => {
    const r = await request(app).post("/calc/foo").send({ a: 1, b: 2 });
    expect(r.status).toBe(400);
  });
});
