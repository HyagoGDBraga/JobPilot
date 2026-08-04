import { Request, Response } from "express";
import { asyncHandler } from "../../../../helpers/asyncHandler";
import { RabbitMQService } from "../service/rabbit-mq.service";

export class RabbitMQController {
  private readonly rabbitMqService: RabbitMQService;
  constructor(rabbitMqService: RabbitMQService) {
    this.rabbitMqService = rabbitMqService;
  }

  health_check = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.rabbitMqService.healthCheck();
    res.status(200).json({ message: `OK`, result });
  });

  startConnection = asyncHandler(async (req: Request, res: Response) => {
    const start = await this.rabbitMqService.initialize();
    res.status(200).json({
      message: `Okay`,
      start,
    });
  });

  getChannel = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.rabbitMqService.getChannel();
    res.status(200).json({ message: `Channel is ok`, result });
  });
}
