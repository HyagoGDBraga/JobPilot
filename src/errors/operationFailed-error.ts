import { AppError } from "./app.error";
import { getCurrentDate } from "../helpers/date-helper";
export class OperationFailed extends AppError {
  constructor(message = `Operation Failed at ${getCurrentDate}`) {
    super(message, 400);
  }
}
