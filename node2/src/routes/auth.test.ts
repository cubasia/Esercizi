import supertest from "supertest"

import  app  from "../app"
const request = supertest(app)

describe("GET /auth/github/login", () => {
test("Valid Request", async () => {
  
  const response = await request
    .get("/auth/github/callback")
      .expect(302)
      .expect("Location", /^https:\/\/github.com\/login\/oauth\/authorize/)
      .expect("Access-Control-Allow-Origin", "http://localhost:8081")
    .expect("Access-Control-Allow-Credentials", "true");
  
})
})
describe("GET /auth/github/callback", () => {
test("Valid Request", async () => {
  
  const response = await request
    .get("/auth/github/callback")
      .expect(302)
      .expect("Location", /^https:\/\/github.com\/login\/oauth\/authorize/)
      .expect("Access-Control-Allow-Origin", "http://localhost:8081")
    .expect("Access-Control-Allow-Credentials", "true");
  
})
})