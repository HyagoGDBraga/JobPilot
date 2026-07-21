import { Unauthorized } from "./unauthorized-error";

export class Role_Error extends Unauthorized{
    constructor(message = "This is not an Admin"){
        super(message);
    }
}