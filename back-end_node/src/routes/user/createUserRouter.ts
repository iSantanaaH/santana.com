import express from "express";
import createUserController from "../../controllers/users/createUserController";

const router = express.Router();
router.post("", createUserController);

export default router;