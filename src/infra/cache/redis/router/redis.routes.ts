import { Router } from "express";
import { Redis_Service } from "../service/redis.service";
import { Redis_Controller } from "../controller/redis.controller";
const redis_c = new Redis_Controller(new Redis_Service());
const router = Router();

router.get("/health-check-redids", redis_c.health_Check_Redis)
router.post("/start_connection-redis", redis_c.start_Redis_Connection)
export default router;
