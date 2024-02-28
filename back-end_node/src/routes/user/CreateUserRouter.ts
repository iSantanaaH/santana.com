import express from "express";
import CreateUserController from "../../controllers/user/CreateUserController";

const router = express.Router();
router.post("", CreateUserController);

export default router;