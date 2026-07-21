import { User } from "../modules/user/entity/user";
import { tokenHelper } from "./token-helper";
const online = new Map<string, User>();

export function setOnlineUser(token: string, user: User): Map<string, User>{
    tokenHelper(token);
    return online.set(token, user);
};

export function setOfflineUser(token: string): void{
      tokenHelper(token);
    online.delete(token);
}

export function getOnlineUser(token: string): User | undefined{
     tokenHelper(token);
    return online.get(token);
};

export function isOlineUser(token: string): boolean {
     tokenHelper(token);
    const on = online.has(token);
    if(!on){
        return false;
    }
    return true;
}
