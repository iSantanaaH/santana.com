// Importações principais.
require("dotenv").config({ path: __dirname + "/.env" });
import express from "express";
import cors from "cors";

// Declarações principais.
const app = express();
const port = process.env.PORT;

// Uses principais da aplicação.
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));

// Importações das Rotas.
import homeRouter from "./routes/homeRouter";
import CreateUserRouter from "./routes/user/CreateUserRouter";
import LoginRouter from "./routes/user/LoginRouter";

// Redirecionamento das Rotas.
app.use("/", homeRouter);
app.use("/minhaconta/cadastro", CreateUserRouter);
app.use("/minhaconta/login", LoginRouter);

// Listen da aplicação.
app.listen(port, () => {
  console.log(`Servidor iniciado em ${new Date()}`);
});
