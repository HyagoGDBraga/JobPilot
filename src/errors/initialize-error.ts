import { AppError } from "./app.error";

export class Initialize_Error extends AppError{
    constructor(message = "Error on Initialize Database!"){
        super(message, 400);
    }
}