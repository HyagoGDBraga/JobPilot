import amqp from "amqplib";
import { env } from "../../../env/env.zod";
const rabbit_URL = env.RABBITMQ_URL as string;
export class RabbitMQ {
  public connection!: amqp.ChannelModel;
  public channel!: amqp.Channel;
  constructor(connection: amqp.ChannelModel, channel: amqp.Channel) {
    this.connection = connection;
    this.channel = channel;
  }
  startConnectionRabbitMQ = async () => {
    try {
      this.connection = await amqp.connect(rabbit_URL!);
      this.channel = await this.connection.createChannel();
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
