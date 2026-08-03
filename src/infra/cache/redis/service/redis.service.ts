import { HealthCheckResult, InitializePromise } from "../../../../types";
import { RedisError } from "../../../../errors/redis-error";
import { cache_redis } from "../redis";
import { UndefinedError } from "../../../../errors/undefined-error";
export class Redis_Service {
  constructor() {
    cache_redis.on("error", (err) => {
      console.error(`Error in initialize redis ${err}`);
    });
  }
  startRedis_connection = async (): Promise<InitializePromise> => {
    try {
      await cache_redis.connect();
      if (!cache_redis.isReady) {
        throw new RedisError();
      }

      console.log(`Redis running successful`);
      return {
        initialize: true,
        result: cache_redis,
      };
    } catch (err) {
      throw err;
    }
  };

  redis_Check_Health = async (): Promise<HealthCheckResult> => {
    try {
      const result = await this.startRedis_connection();
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
