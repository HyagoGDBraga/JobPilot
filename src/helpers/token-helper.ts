import { MissingToken_ERROR } from "../errors/missing-token-error";

export function tokenHelper(token: string){
    if(token === null || !token){
            throw new MissingToken_ERROR();
        }
        return null;
}