import amqp from "amqplib";
import { env } from "../../../env/env.zod";
const rabbitUrl = env.RABBITMQ_URL as string;

export class RabbitMQ {
  public connection!: amqp.ChannelModel;
  public channel!: amqp.Channel;
 
  startConnectionRabbitMQ = async () => {
    try {
      this.connection = await amqp.connect(rabbitUrl!);
      this.channel = await this.connection.createChannel();
       return this.channel;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  };
  getChannel = () => {
    return this.channel;
  };
}
