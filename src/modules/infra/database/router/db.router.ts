import { Router } from "express";
import { Db_Controller } from "../controller/db.controller";
import { Db_Service } from "../service/db.service";
import { dataBaseMiddleware } from "../../../../middlewares/database.middleware";
//import { authMiddleware } from "../../../../middlewares/token.middleware";
const db_controller = new Db_Controller(new Db_Service());
const router =  Router();

router.get("/health_database",dataBaseMiddleware, db_controller.health_Check_Database);

export default router;
