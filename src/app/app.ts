import application from "../http";
import { env } from "../env/env.zod";
import { Redis_Service } from "../infra/cache/redis/service/redis.service";
import { RabbitMQ } from "../infra/queue/rabbitmq/rabbit-mq";
import { RabbitMQ_Service } from "../infra/queue/rabbitmq/service/rabbit-mq.service";
const redis = new Redis_Service();
const rabbitMq = new RabbitMQ_Service(new RabbitMQ());

const PORT = env.PORT || 3000;
async function bootstrap() {
  try {
    await redis.startRedis_connection();
    await rabbitMq.startConnectionRabbitMQ();
    application.listen(PORT, () => {
      console.log(`Running on ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start application:", err);
    process.exit(1);
  }
}
bootstrap();

export default application;
