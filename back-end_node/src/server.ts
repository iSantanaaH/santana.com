require("dotenv").config();

import express from "express";
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;