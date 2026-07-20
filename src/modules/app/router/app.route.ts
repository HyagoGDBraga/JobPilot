import { Router } from "express";
import { App_Service } from "../service/app.service";
import { App_Controller } from "../controller/app.controller";
import  express  from "express";
const app_controller = new App_Controller(new App_Service());


const router = Router();

router.get("/health-check", app_controller.health_check_app);

export default router;