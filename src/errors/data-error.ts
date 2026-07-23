import { AppError } from "./app.error";

export class NoDataError extends AppError{
    constructor(message = "No data provided" ){
        super(message, 404);
    };
};