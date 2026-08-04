import { Request, Response} from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { AppService } from "../service/app.service";
import { ServerError } from "../../errors/server-error";
export class AppController {
    private readonly appService: AppService;
    constructor(appService: AppService){
        this.appService = appService;
    }
    healthCheckApp = asyncHandler(async(req: Request, res: Response)=>{
        const result = await this.appService.healthCheck();
        if(!result){
            throw new ServerError();
        }
        res.status(200).json({
            message: `Server is ok`,
            result: result
        });
    })
}