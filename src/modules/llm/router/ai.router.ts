import { Router } from "express";
import { AiController } from "../controller/ai.controller";

const router = Router();

const aiController = new AiController();

router.get(
  "/test",
  aiController.test.bind(aiController)
);

export default router;