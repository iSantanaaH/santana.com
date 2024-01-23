require("dotenv").config({ path: __dirname+"/.env" });
import express from "express";
import cors from "cors";


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// Importações das Rotas
import homeRouter from './routes/homeRouter';

//Uso das Rotas
app.use("/", homeRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado em ${new Date()} na porta ${port}`);
});
