import express from "express";
import "express-async-errors";
import {
  validate,
  planetSchema,
  PlanetData,
  validatationErrorMiddleware,
} from "./lib/validation";
import {initMulterMiddleware} from "../middleware/multer";
import cors from "cors"
import prisma  from "./lib/prisma/client"

//** COSTANTI*/
const upload = initMulterMiddleware();

const corsOptions = {
  origin: "http://localhost:8081"
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

//** ROUTE */

app.get("/planets", async (request, response) => {

  const planets = await prisma.planet.findMany()
  response.status(201).json(planets);

});
app.get("/planets/:id(\\d+)", async (request, response,next) => {
  const planetId = Number(request.params.id);
  const planet = await prisma.planet.findUnique({
    where: { id: planetId }
  })
  if (!planet) {
    response.status(404)
    return next(`Cannot Get /planets/${planetId}`)
   }

  response.json(planet);
});
app.put("/planets/:id(\\d+)",validate({body:planetSchema}),async (request, response,next) => {
  const planetData: PlanetData = request.body
  const planetId = Number(request.params.id)
  try {
  const planet = await prisma.planet.update({
    where: { id: planetId },
    data: planetData,
  });
  response.status(200).json(planet);  
  } catch (error) {
    response.status(404)
    next(`Cannot PUT /planets/${planetId}`)
  }
  
});
app.delete("/planets/:id(\\d+)", async (request, response,next) => {
  const planetId = Number(request.params.id);
  try {
    await prisma.planet.delete({
      where: { id: planetId }
    });
    response.status(204).end();
  } catch (error) {
    response.status(404);
    next(`Cannot DELETE /planets/${planetId}`);
  }
});

app.post("/planets", validate({ body: planetSchema }), async (request, response) => {
//app.post("/planets", async (request, response) => {
  const planetData:PlanetData = request.body
  const planet = await prisma.planet.create({
    data:planetData
  })
  response.status(201).json(planet);
});

app.post(
  "/planets/:id(\\d+)/photo",
  upload.single("photo"), //photo è il nome del campo della form
  async (request, response, next) => {
    //console.log("request file", request.file);

    if (!request.file) {
      response.status(400);
      return next("No photo file uploaded.");
    }

    const photoFileName = request.file.originalname;
    response.status(201).json({ photoFileName });
  }
);

  //Il Middleware degli errori deve essere messo dopo la definizione delle route
app.use(validatationErrorMiddleware);

export default app
