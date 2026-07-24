import { Redis_Service } from "../service/redis.service";
import { asyncHandler } from "../../../../helpers/asyncHandler";
import { ServerError } from "../../../../errors/server-error";
import { Request, Response } from "express";
export class Redis_Controller {
  private readonly redis_s: Redis_Service;
  constructor(redis_s: Redis_Service) {
    this.redis_s = redis_s;
  }

  health_Check_Redis = asyncHandler(async (req: Request, res: Response) => {
    const check = await this.redis_s.redis_Check_Health();
    if (!check) {
      throw new ServerError();
    }
    res.status(200).json({ message: `Ok`, check });
  });
}
