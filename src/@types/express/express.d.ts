import "express";
import { ROLE } from "../../helpers/role-helper";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: ROLE;
      };

      requestId?: string;
    }
  }
}

export {};