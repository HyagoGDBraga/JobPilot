import { HealthCheckResult, InitializePromise } from "../../../../types";
import { RedisError } from "../../../../errors/redis-error";
import { cacheRedis } from "../redis";
import { UndefinedError } from "../../../../errors/undefined-error";
export class RedisService {
  constructor() {
    cacheRedis.on("error", (err) => {
      console.error(`Error in initialize redis ${err}`);
    });
  }
  startRedisConnection = async (): Promise<InitializePromise> => {
    try {
      await cacheRedis.connect();
      if (!cacheRedis.isReady) {
        throw new RedisError();
      }

      console.log(`Redis running successful`);
      return {
        initialize: true,
        result: cacheRedis,
      };
    } catch (err) {
      throw err;
    }
  };

  redisCheckHealth = async (): Promise<HealthCheckResult> => {
    try {
      const result = await this.startRedisConnection();
      if (result === undefined) {
        throw new UndefinedError();
      }
      return {
        result: result,
        message: `Ok, redis is running!`,
      };
    } catch (err) {
      throw err;
    }
  };
}
