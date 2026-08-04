import { Router } from "express";
import { RedisService } from "../service/redis.service";
import { RedisController } from "../controller/redis.controller";
const redisController = new RedisController(new RedisService());
const router = Router();

router.get("/health-check-redids", redisController.health_Check_Redis)
router.post("/start_connection-redis", redisController.start_Redis_Connection)
export default router;
