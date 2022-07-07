import express from "express"
import "express-async-errors"
// type Nome = string
// const nome: Nome = "Magico Peppe";
// console.log(nome);

const app = express()
//*********** ROUTE */
app.get("/", (request, response) => {
    response.send("Up and running");
})

const port = 3000

app.listen(port, () => { 
    console.log("Server is running on port " + port);
})