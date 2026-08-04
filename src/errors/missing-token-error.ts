import { AppError } from "./app.error";

export class MissingTokenError extends AppError {
  constructor(message = "Missing token, please, insert a valid token") {
    super(message, 404);
  }
}
