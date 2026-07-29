import { Router } from "express";
import { RabbitMQ_Controller } from "../controller/rabbit.controller";
import { RabbitMQ_Service } from "../service/rabbit-mq.service";
import { RabbitMQ } from "../rabbit-mq";
const rabbit = new RabbitMQ();
const rabbit_Controller = new RabbitMQ_Controller(new RabbitMQ_Service(rabbit));
const router = Router();

router.get("/health-check-rabbit", rabbit_Controller.health_check);
export default router;