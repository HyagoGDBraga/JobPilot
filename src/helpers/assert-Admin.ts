import { RoleError } from "../errors/role-error";
import { ROLE } from "./role-helper";
export function isAssertAdmin(role: ROLE): boolean {
  if (role !== ROLE.ADMIN) {
    throw new RoleError();
  }
  console.log(`Is admin!`);
  return true;
}
