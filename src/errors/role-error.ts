import { Unauthorized } from "./unauthorized-error";

export class RoleError extends Unauthorized{
    constructor(message = "This is not an Admin"){
        super(message);
    }
}