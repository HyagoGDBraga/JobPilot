
import { Request, Response, NextFunction } from "express";
import { Unauthorized } from "../errors/unauthorized-error";
import jwt from 'jsonwebtoken';
import { env } from "../env/env.zod";

export const authMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Unauthorized();
    }
    const [schema, token] = authHeader.split(" ");
    if(schema !=='Bearer' || token){
        throw new Unauthorized();
    }
    const payload = jwt.verify(token, env.JWT) as {
        id: string,
        email: string,
        role: "admin" | "user"
    };
    req.user = payload;
    next();
}