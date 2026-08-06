import { AppError } from "./app.error";

export class UploadError extends AppError {
  constructor(message = `Error on upload content`) {
    super(message, 500);
  }
}
