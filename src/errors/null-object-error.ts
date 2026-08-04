import { AppError } from "./app.error";

export class NullObjectError extends AppError {
  constructor(message = "This object is null") {
    super(message, 400);
  }
}
