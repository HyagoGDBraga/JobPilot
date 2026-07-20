import { Request, Response} from "express";
import { asyncHandler } from "../../../helpers/asyncHandler";
import { App_Service } from "../service/app.service";
import { ServerError } from "../../../errors/server-error";
export class App_Controller {
    private readonly app_service: App_Service;
    constructor(app_service: App_Service){
        this.app_service = app_service;
    }
    health_check_app = asyncHandler(async(req: Request, res: Response)=>{
        const result = await this.app_service.healthCheck();
        if(!result){
            throw new ServerError();
        }
        res.status(200).json({
            message: `Server is ok`,
            result: result
        });
    })
}