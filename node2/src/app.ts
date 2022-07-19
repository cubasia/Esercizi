import express, { application } from "express";
import "express-async-errors";

import { validatationErrorMiddleware } from "./lib/middleware/validation";
import planetRoutes from "./routes/planets"
import { intCorsMiddleware } from "./lib/middleware/cors"
import { initSessionMiddleware } from "./lib/middleware/session"
import { passport } from "./lib/middleware/passport"

const app = express();

// *** LISTA MIDDLEWARE
app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(intCorsMiddleware());
app.use("/planets",planetRoutes)

//Il Middleware degli errori deve essere messo dopo la definizione delle route
app.use(validatationErrorMiddleware);

export default app;