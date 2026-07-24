import { startRedis_connection } from "../redis";
import { HealthCheckResult } from "../../../../types";
import { UndefinedError } from "../../../../errors/undefined-error";
export class Redis_Service {
  constructor() {}

  redis_Check_Health = async (): Promise<HealthCheckResult> => {
    try {
      const result = await startRedis_connection();
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
