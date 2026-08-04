import { Request, Response, NextFunction } from "express";
import { MiddlewareError } from "../errors/middleware-error";
import { DbService } from "../infra/database/service/db.service";

export async function dataBaseMiddleware (req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
        const db = new DbService();
        const result = await db.dbIsRunning();
        if(!result || result.status !== "ok"){
             return next(new MiddlewareError());
        }
        next();
    }catch(err){
        next(err);
    }
}