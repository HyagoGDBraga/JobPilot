import { Request, Response } from "express";
import { DbService } from "../service/db.service";
import { asyncHandler } from "../../../helpers/asyncHandler";
export class DbController {
  private readonly dbService: DbService;
  constructor(dbService: DbService) {
    this.dbService = dbService;
  }

  healthCheckDatabase = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.dbService.dbIsRunning();
    res
      .status(200)
      .json({
        result,
        message: "Database Is Running!",
      });
  });
}
