import { Role_Error } from "../errors/role-error";
import { ROLE } from "./role-helper";
export function isAssertAdmin(role: ROLE): boolean {
  if (role !== ROLE.ADMIN) {
    throw new Role_Error();
  }
  console.log(`Is admin!`);
  return true;
}
