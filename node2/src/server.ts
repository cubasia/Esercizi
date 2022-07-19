import "dotenv/config"
import app from "./app";
import config from "./config";

//** START SERVER */
const port = config.PORT
app.listen(port, () => {
  console.log("Server is running on porta " + port);
});