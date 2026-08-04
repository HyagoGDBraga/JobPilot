import { Router } from "express";
import { RabbitMQController } from "../controller/rabbit.controller";
import { RabbitMQService } from "../service/rabbit-mq.service";
import { RabbitMQ } from "../rabbit-mq";

const rabbit = new RabbitMQ();
const rabbitService = new RabbitMQService(rabbit);
const rabbitController = new RabbitMQController(rabbitService);

const router = Router();

router.get("/health-check", rabbitController.health_check);
router.post("/connect", rabbitController.startConnection);
router.get("/channel", rabbitController.getChannel);

export default router;
