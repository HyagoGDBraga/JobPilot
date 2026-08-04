import { Router } from "express";
import { AppService } from "../service/app.service";
import { AppController } from "../controller/app.controller";
const appController = new AppController(new AppService());


const router = Router();

router.get("/health-check", appController.healthCheckApp);

export default router;