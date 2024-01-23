// routes/homeRouter.ts
import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

router.post("/", homeController);

export default router;
