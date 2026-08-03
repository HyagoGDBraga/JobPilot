import { Redis_Service } from "../service/redis.service";
import { asyncHandler } from "../../../../helpers/asyncHandler";
import { ServerError } from "../../../../errors/server-error";
import { Request, Response } from "express";

export class Redis_Controller {
  constructor(private readonly redis_s: Redis_Service) {}

  health_Check_Redis = asyncHandler(async (_req: Request, res: Response) => {
    const check = await this.redis_s.redis_Check_Health();

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
      const result = await this.redis_s.startRedis_connection();

      return res.status(200).json({
        message: "Redis connected successfully",
        result,
      });
    },
  );
}
