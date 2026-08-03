import { Router } from "express";
import { RabbitMQ_Controller } from "../controller/rabbit.controller";
import { RabbitMQ_Service } from "../service/rabbit-mq.service";
import { RabbitMQ } from "../rabbit-mq";

const rabbit = new RabbitMQ();
const rabbitService = new RabbitMQ_Service(rabbit);
const rabbitController = new RabbitMQ_Controller(rabbitService);

const router = Router();

router.get("/health-check", rabbitController.health_check);
router.post("/connect", rabbitController.startConnection);
router.get("/channel", rabbitController.getChannel);

export default router;
