import express from "express";
import cors from "cors";
//importar conexion a la db
import db from "./database/db.js";
//importar enrutador
import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("", router);

try {
    await db.authenticate();
    console.log("Connection has been established successfully");
} catch (error) {
    console.log(`The connection error is: ${error}`);
}

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})