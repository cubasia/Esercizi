import express, { Router } from 'express'
import prisma from "../lib/prisma/client";
import {
  validate,
  planetSchema,
  PlanetData,
} from "../lib/middleware/validation";
import { initMulterMiddleware } from "../lib/middleware/multer";

import { checkAuthorization } from '../lib/middleware/passport';


const upload = initMulterMiddleware();

const router = Router();

//** ROUTE */

router.get("/", async (request, response) => {
  const planets = await prisma.planet.findMany();
  
   response.status(201).json(planets);
  
});
router.get("/:id(\\d+)", async (request, response, next) => {
  const planetId = Number(request.params.id);
  const planet = await prisma.planet.findUnique({
    where: { id: planetId },
  });
  if (!planet) {
    response.status(404);
    return next(`Cannot Get /planets/${planetId}`);
  }

  response.json(planet);
});
router.put(
  "/:id(\\d+)",
  checkAuthorization,
  validate({ body: planetSchema }),
  async (request, response, next) => {
    const planetData: PlanetData = request.body;
    const planetId = Number(request.params.id);
    try {
      const planet = await prisma.planet.update({
        where: { id: planetId },
        data: planetData,
      });
      response.status(200).json(planet);
    } catch (error) {
      response.status(404);
      next(`Cannot PUT /planets/${planetId}`);
    }
  }
);
router.delete(
  "/:id(\\d+)",
  checkAuthorization,
  async (request, response, next) => {
    const planetId = Number(request.params.id);
    try {
      await prisma.planet.delete({
        where: { id: planetId },
      });
      response.status(204).end();
    } catch (error) {
      response.status(404);
      next(`Cannot DELETE /planets/${planetId}`);
    }
  }
);

router.post(
  "/",checkAuthorization,
  validate({ body: planetSchema }),
  async (request, response) => {
    //router.post("/planets", async (request, response) => {
    const planetData: PlanetData = request.body;
    const planet = await prisma.planet.create({
      data: planetData,
    });
    response.status(201).json(planet);
  }
);

//ESEMPIO DI GESTIONE PER INVIARE MSG INVECE DI ERRORI ALLo USER

// var avatarUpload = multer.single("avatar");

// router.post("/avatar", (req, res) => {
//   avatarUpload(req, res, (err) => {
//     if (err) return res.send({ error: "invalid_file" });

//     console.log("save the file", req.file);
//   });
// });


router.post(
  "/:id(\\d+)/photo",
  checkAuthorization,
  upload.single("photo"), //photo è il nome del campo della form
  async (request, response, next) => {
    //console.log("request file", request.file);

    if (!request.file) {
      response.status(400);
      return next("No photo file uploaded.");
    }
    const planetId = Number(request.params.id);
    const photoFilename = request.file.originalname;

    try {
      await prisma.planet.update({
        where: { id: planetId },
        data: { photoFilename },
      });
    } catch (err) {
      response.status(404);
      return next(`Cannot POST /planets/${planetId}/photo`);
    }

    response.status(201).json({ photoFilename });
  }
);

router.use("/photo",express.static("uploads"))


export default router