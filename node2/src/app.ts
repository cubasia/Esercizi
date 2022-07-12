import express from "express";
import "express-async-errors";
import { validate, planetSchema, PlanetData } from "./lib/validation"
import {initMulterMiddleware} from "../middleware/multer";
import cors from "cors"
//** COSTANTI*/
const corsOptions = {
  origin: "http://localhost:8080"
}
const upload = initMulterMiddleware()
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
//** ROUTE */

app.get("/planets", (request, response) => {
  response.json([{ name: "Mercury" }, { name: "Venus" }]);
});

app.post("/planets",validate({body:planetSchema}), async (request, response) => {
  response.json([{ name: "Mercury" }, { name: "Venus" }]);
});

app.post("/planets/photo",
  upload.single("photo"),
  async (request, response, next) => {
    console.log("request file", request.file);
    
    if (!request.file) {
      response.status(400)
      return next("no photo file uploaded")
    }

    const photoFileName = request.file.filename
    response.status(201).json({photoFileName})
   })
export default app
