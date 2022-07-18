import "dotenv/config"
import app from "./app";

//** START SERVER */
const port = process.env.PORT
app.listen(port, () => {
  console.log("Server is running on porta " + port);
});