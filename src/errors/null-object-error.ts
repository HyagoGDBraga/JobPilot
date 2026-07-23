import { AppError } from "./app.error";

export class Null_Object_Error extends AppError {
  constructor(message = "This object is null") {
    super(message, 400);
  }
}
