import { AppError } from "./app.error";

export class Unauthorized extends AppError{
    constructor(message = `Unauthorized, no token in req`){
        super(message, 401);
    }
}