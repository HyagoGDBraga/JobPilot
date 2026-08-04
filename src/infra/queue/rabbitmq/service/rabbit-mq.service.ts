import { HealthCheckResult, InitializePromise } from "../../../../types";
import { RabbitMQ } from "../rabbit-mq";
import { env } from "../../../../env/env.zod";
import { UndefinedError } from "../../../../errors/undefined-error";
const rabbitUrl = env.RABBITMQ_URL as string;
export class RabbitMQService {
  private readonly rabbitMq: RabbitMQ;
  constructor(rabbitMq: RabbitMQ) {
    this.rabbitMq = rabbitMq;
  }

  startConnectionRabbitMQ = async (): Promise<InitializePromise> => {
    try {
      const start = await this.rabbitMq.startConnectionRabbitMQ();
      if (start == undefined) {
        throw new UndefinedError();
      }
      return {
        initialize: true,
        result: start,
      };
    } catch (err) {
      throw err;
    }
  };
  getChannel = () => {
    return this.rabbitMq.getChannel();
  };
  healthCheck = async (): Promise<HealthCheckResult> => {
    try {
      const result = await this.startConnectionRabbitMQ();
      return {
        result: result,
        message: `Ok, rabbit is start connection`,
      };
    } catch (err) {
      throw err;
    }
  };
}
