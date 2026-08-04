import { MissingTokenError } from "../errors/missing-token-error";

export function tokenHelper(token: string){
    if(token === null || !token){
            throw new MissingTokenError();
        }
        return null;
}