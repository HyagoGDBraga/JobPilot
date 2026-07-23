import { AppError } from "./app.error";

export class RedisError extends AppError{
    constructor(message = "Failed on start redis"){
        super(message, 400);
    }
}