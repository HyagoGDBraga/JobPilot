import { AppError } from "./app.error";

export class ServerError extends AppError {
    constructor(message = "Error on initializer server"){
        super(message, 500);
    }
}