import { Router } from "express";
import { DbController } from "../controller/db.controller";
import { DbService } from "../service/db.service";
import { dataBaseMiddleware } from "../../../middlewares/database.middleware";
//import { authMiddleware } from "../../../../middlewares/token.middleware";
const dbController = new DbController(new DbService());
const router =  Router();

router.get("/health_database",dataBaseMiddleware, dbController.healthCheckDatabase);

export default router;
