import express from "express";
import CreateUserController from "../../controllers/user/createUserController";

const router = express.Router();
router.post("", CreateUserController);

export default router;