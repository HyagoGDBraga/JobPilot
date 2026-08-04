import { RedisService } from "../service/redis.service";
import { asyncHandler } from "../../../../helpers/asyncHandler";
import { ServerError } from "../../../../errors/server-error";
import { Request, Response } from "express";

export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  health_Check_Redis = asyncHandler(async (_req: Request, res: Response) => {
    const check = await this.redisService.redisCheckHealth();

    if (!check) {
      throw new ServerError();
    }

    return res.status(200).json({
      message: "Ok",
      check,
    });
  });

  start_Redis_Connection = asyncHandler(
    async (_req: Request, res: Response) => {
      const result = await this.redisService.startRedisConnection();

      return res.status(200).json({
        message: "Redis connected successfully",
        result,
      });
    },
  );
}
