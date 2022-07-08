import express from "express";
 import "express-async-errors";

//** COSTANTI*/

const app = express();
//** ROUTE */

app.get("/planets", (request, response) => {
  response.json([{ name: "Mercury" }, { name: "Venus" }]);
    
});

export default app
