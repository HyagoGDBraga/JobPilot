import amqp from "amqplib";
import { HealthCheckResult, InitializePromise } from "../../../../types";
import { RabbitMQ } from "../rabbit-mq";
import { UndefinedError } from "../../../../errors/undefined-error";

export class RabbitMQService {
  private readonly rabbitMq: RabbitMQ;

  constructor(rabbitMq: RabbitMQ) {
    this.rabbitMq = rabbitMq;
  }

  initialize = async (): Promise<InitializePromise> => {
    try {
      const channel = await this.rabbitMq.startConnectionRabbitMQ();

      if (!channel) {
        throw new UndefinedError();
      }

      return {
        initialize: true,
        result: channel,
      };

    } catch (err) {
      throw err;
    }
  };


  getChannel = () => {
    const channel = this.rabbitMq.getChannel();

    if (!channel) {
      throw new UndefinedError();
    }

    return channel;
  };


  assertQueue = async (
    queue: string
  ) => {
    const channel = this.getChannel();

    return channel.assertQueue(queue, {
      durable: true,
    });
  };


  publish = async (
    queue: string,
    message: unknown
  ): Promise<boolean> => {

    const channel = this.getChannel();

    await this.assertQueue(queue);

    return channel.sendToQueue(
      queue,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
      }
    );
  };


  consume = async (
    queue: string,
    callback: (
      message: amqp.ConsumeMessage | null
    ) => void
  ) => {

    const channel = this.getChannel();

    await this.assertQueue(queue);

    return channel.consume(
      queue,
      callback
    );
  };


  ack = (
    message: amqp.Message
  ) => {

    const channel = this.getChannel();

    channel.ack(message);
  };


  nack = (
    message: amqp.Message,
    requeue = true
  ) => {

    const channel = this.getChannel();

    channel.nack(
      message,
      false,
      requeue
    );
  };


  purgeQueue = async (
    queue: string
  ) => {

    const channel = this.getChannel();

    return channel.purgeQueue(queue);
  };


  deleteQueue = async (
    queue: string
  ) => {

    const channel = this.getChannel();

    return channel.deleteQueue(queue);
  };


  close = async (): Promise<void> => {

    const channel = this.getChannel();

    await channel.close();
  };


  healthCheck = async (): Promise<HealthCheckResult> => {
    try {

      const channel = this.getChannel();

      return {
        result: channel !== undefined,
        message: "Ok, rabbit is running!",
      };

    } catch (err) {
      throw err;
    }
  };
}