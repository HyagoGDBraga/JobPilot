import { Request, Response } from "express";
import { asyncHandler } from "../../../../helpers/asyncHandler";
import { RabbitMQ_Service } from "../service/rabbit-mq.service";

export class RabbitMQ_Controller {
  private readonly rabbitMq_service: RabbitMQ_Service;
  constructor(rabbitMq_service: RabbitMQ_Service) {
    this.rabbitMq_service = rabbitMq_service;
  }

  health_check = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.rabbitMq_service.healthCheck();
    res.status(200).json({ message: `OK`, result });
  });

  startConnection = asyncHandler(async (req: Request, res: Response) => {
    const start = await this.rabbitMq_service.startConnectionRabbitMQ();
    res.status(200).json({
      message: `Okay`,
      start,
    });
  });

  getChannel = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.rabbitMq_service.getChannel();
    res.status(200).json({ message: `Channel is ok`, result });
  });
}
