import express from "express";
import morgan from "morgan";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import "./src/databasse/model/dbConection.js";
import router from "./src/databasse/routes/producto.routes.js";
//1- configurar un puerto
const app = express();
app.set("puerto", process.env.PORT || 4000);
app.listen(app.get("puerto"), () => {
  console.info("estoy en el puerto " + app.get("puerto"));
});
//2- configarar middlewares
app.use(cors); //permite coneciones remotas
app.use(morgan("dev")); //nos da informacion extra en la terminal
app.use(express.json);
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));
//3-configurar las rutas
app.use("/api", router);
