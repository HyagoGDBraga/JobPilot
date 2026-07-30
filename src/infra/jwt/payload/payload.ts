import { ROLE } from "../../../helpers/role-helper";

export type payload_jwt = {
    id: string,
    email: string,
    role: ROLE,
};