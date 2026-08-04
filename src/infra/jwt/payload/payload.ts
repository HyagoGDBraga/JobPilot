import { ROLE } from "../../../helpers/role-helper";

export type payloadJwt = {
    id: string,
    email: string,
    role: ROLE,
};