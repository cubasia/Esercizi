import { errorMonitor } from "events"
import supertest from "supertest"

import  app  from "./app"
import {prismaMock} from "./lib/prisma/client.mock"
const request = supertest(app)

describe("GET /planet/:id", () => {
test("Valid Request", async () => {
  const planet = 
    {
      id: 4,
      name: "Terra",
      description: "Bella",
      diameter: 40000,
      moons: 1,
      createdAt: "2020-01-01T00:00:00.000Z",
      updatedAt: "2020-01-01T00:00:00.000Z",
    }
  
  //@ts-ignore
  prismaMock.planet.findUnique.mockResolvedValue(planet);
  const response = await request
    .get("/planets/4")
    .expect(200)
    .expect("Content-Type", "application/json; charset=utf-8");

  expect(response.body).toEqual(planet);
})
  
  test("Planet does not exist", async () => { 
    prismaMock.planet.findUnique.mockResolvedValue(null);
    const response = await request
      .get("/planets/401")
      .expect(404)
      .expect("Content-Type", "text/html; charset=utf-8");

    expect(response.text).toContain("Cannot Get /planets/401")
  })
}) //End Describe

//************************************************************************************************ */
describe("GET /planets", () => {
test("Valid Request", async () => {
  const planets = [
    {
      id: 4,
      name: "Terra",
      description: "Bella",
      diameter: 40000,
      moons: 1,
      createdAt: "2020-01-01T00:00:00.000Z",
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    {
      id: 5,
      name: "Giove",
      description: "Giove",
      diameter: 1000000,
      moons: 12,
      createdAt: "2022-01-01T00:00:00.000Z",
      updatedAt: "2022-01-01T00:00:00.000Z",
    },
  ];
  //@ts-ignore
  prismaMock.planet.findMany.mockResolvedValue(planets);
  const response = await request
    .get("/planets")
    .expect(201)
    .expect("Content-Type", "application/json; charset=utf-8")
  .expect("Access-Control-Allow-Origin", "http://localhost:8081")

  expect(response.body).toEqual(planets);
})
}) //End Describe
 
describe("POST /planets", () => {
  //****************************** */
  test("valid request", async () => {
    const planet = {
      id: 6,
      name: "Mercury",
      description: null,
      diameter: 1234,
      moons: 12,
      createdAt: "2022-07-18T10:19:54.259Z",
      updatedAt: "2022-07-18T10:19:54.264Z",
    };
    //@ts-ignore
    prismaMock.planet.create.mockResolvedValue(planet);

    const response = await request
      .post("/planets")
      .send({
        name: "Mercury",
        diameter: 1234,
        moons: 12,
      })
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect("Access-Control-Allow-Origin", "http://localhost:8081");

    expect(response.body).toEqual(planet);
  })
  //****************************** */
  test("invalid request", async () => {
    const planet = {
      diameter: 1234,
      moons: 12
    }

    const response = await request
      .post("/planets")
      .send(planet)
      .expect(422)
      .expect("Content-Type", "application/json; charset=utf-8");
  
    expect(response.body).toEqual({
      error: {
        body: expect.any(Array)
      }
    });

  })
}) //end Describe 
//**************************************************************************** */
describe("PUT /planet/:id", () => {
test("Valid Request", async () => {
  const planet = {
    id: 4,
    name: "Terra",
    description: "Bella",
    diameter: 40000,
    moons: 1,
    createdAt: "2020-01-01T00:00:00.000Z",
    updatedAt: "2022-07-18T13:22:03.798Z",
  };
  
  //@ts-ignore
  prismaMock.planet.update.mockResolvedValue(planet);
  const response = await request
    .put("/planets/4")
    .send({
      name: "Terra",
      description: "Bella",
      diameter: 40000,
      moons: 1,
    })
    .expect(200)
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect("Access-Control-Allow-Origin", "http://localhost:8081");
    
  expect(response.body).toEqual(planet);
})
  
  test("invalid request", async () => { 
    const planeta = {
      diameter: 40000,
      moons: 1,
    };
    // prismaMock.planet.update.mockResolvedValue(planeta);
    const response = await request
      .put("/planets/401")
      .send(planeta)
      .expect(422)
      .expect("Content-Type", "application/json; charset=utf-8");

    expect(response.body).toEqual({
      error: {
        body:expect.any(Array)
      }
    })
  })
   test("Planet does not exist", async () => {
     prismaMock.planet.update.mockRejectedValue(new Error("Error"));
     const response = await request
       .put("/planets/401")
       .send({
         name: "Terra",
         description: "Bella",
         diameter: 40000,
         moons: 1,
       })
       .expect(404)
       .expect("Content-Type", "text/html; charset=utf-8");

     expect(response.text).toContain("Cannot PUT /planets/401");
   });
  test("Invalid planet ID", async () => {
    prismaMock.planet.update.mockRejectedValue(new Error("Error"));
    const response = await request
      .put("/planets/abc")
      .send({
        name: "Terra",
        description: "Bella",
        diameter: 40000,
        moons: 1,
      })
      .expect(404)
      .expect("Content-Type", "text/html; charset=utf-8");

    expect(response.text).toContain("Cannot PUT /planets/abc");
  });
}) //End Describe
//************************************************************************************************ */
describe("DELETE /planets:id", () => {
test("Valid Request", async () => {
  
 const response = await request
   .delete("/planets/5")
   .expect(204)
   .expect("Access-Control-Allow-Origin", "http://localhost:8081");
    
  expect(response.text).toEqual(``);
})
  test("Planet does not exist", async () => {
    prismaMock.planet.delete.mockRejectedValue(new Error("planet not found"));
    const response = await request
      .delete("/planets/401")
      .expect(404)
      .expect("Content-Type", "text/html; charset=utf-8");

    expect(response.text).toContain("Cannot DELETE /planets/401");
  });
  //*********** */
  test("Invalid Planet id", async () => {
   
    const response = await request
      .delete("/planets/abc")
      .expect(404)
      .expect("Content-Type", "text/html; charset=utf-8");

    expect(response.text).toContain("Cannot DELETE /planets/abc");
  });
}) //End Describe
//********************************************************************** */
describe("POST /planets:id/photo", () => {
  test("Valid Request with PNG file upload", async () => {
    await request
      .post("/planets/5/photo")
      .attach("photo","text-fixtures/photo/lorem.png")
      .expect(201)
      .expect("Access-Control-Allow-Origin", "http://localhost:8081");
  });

test("Invalid Request", async () => {
  
 const response = await request
   .post("/planets/abc/photo")
   .expect(404)
   .expect("Content-Type", "text/html; charset=utf-8");
   
    
  expect(response.text).toContain("Cannot POST /planets/abc/photo");
})
test("Invalid Request with no file upload", async () => {
  
 const response = await request
   .post("/planets/5/photo")
   .expect(400)
   .expect("Content-Type", "text/html; charset=utf-8");
   
    
  expect(response.text).toContain("No photo file uploaded.");
})

}) //End Describe