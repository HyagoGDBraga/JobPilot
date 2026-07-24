import { AppError } from "./app.error";

export class UndefinedError extends AppError {
  constructor(message = `This is undefined!`) {
    super(message, 400);
  }
}
