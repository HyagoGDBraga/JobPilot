import { AppError } from "./app.error";

export class MiddlewareError extends AppError{
    constructor(message = "middleware error, unauthorized"){
        super(message, 401);
    }
}