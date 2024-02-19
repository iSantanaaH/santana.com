import express from "express";
import LoginController from "../../controllers/user/LoginController";

const router = express.Router();

router.use("", LoginController);

export default router;
