import { AppError } from "./app.error";

export class InitializeError extends AppError{
    constructor(message = "Error on Initialize Database!"){
        super(message, 400);
    }
}