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
      if (!cacheRedis.isOpen) {
        await cacheRedis.connect();
      }
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

  setKey = async (
    key: string,
    value: string,
    ttl?: number,
  ): Promise<string | null> => {
    try {
      if (!key || !value) {
        throw new UndefinedError();
      }
      if (ttl) {
        const ch = await cacheRedis.set(key, value, { EX: ttl });
        return ch;
      }
      return await cacheRedis.set(key, value);
    } catch (err) {
      throw err;
    }
  };
  getKey = async (key: string): Promise<string | null> => {
    try {
      if (!key) {
        throw new UndefinedError();
      }
      const cache = cacheRedis.get(key);
      return cache;
    } catch (err) {
      throw err;
    }
  };
  removeKey = async (key: string): Promise<void> => {
    try {
      if (!key) {
        throw new UndefinedError();
      }
      await cacheRedis.del(key);
    } catch (err) {
      throw err;
    }
  };
  ping = async (): Promise<string> => {
    try {
      return cacheRedis.ping();
    } catch (err) {
      throw err;
    }
  };
}
