import { Request, Response } from "express";
import { Db_Service } from "../service/db.service";
import { asyncHandler } from "../../../helpers/asyncHandler";
export class Db_Controller {
  private readonly db_service: Db_Service;
  constructor(db_Service: Db_Service) {
    this.db_service = db_Service;
  }

  health_Check_Database = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.db_service.dbIsRunning();
    res
      .status(200)
      .json({
        result,
        message: "Database Is Running!",
      });
  });
}
