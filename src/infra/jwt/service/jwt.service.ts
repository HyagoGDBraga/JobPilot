import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { payload_jwt } from "../payload/payload";
import { env } from "../../../env/env.zod";
import { Null_Object_Error } from "../../../errors/null-object-error";
const access_token = env.JWT as string;
const refresh_token = env.JWT_REFRESH as string;
const expiresTime = env.JWT_EXPIRES_IN as SignOptions["expiresIn"];
const refresh_expires_time = env.REFRESH_EXPIRES_IN as SignOptions["expiresIn"];
export class Jwt_Service {
  accessToken = (payload: payload_jwt): string => {
    try {
      const t = jwt.sign(
        { id: payload.id, email: payload.email, role: payload.role },
        access_token,
        { expiresIn: expiresTime },
      );
      return t;
    } catch (err) {
      throw err;
    }
  };

  refreshToken = (userId: string): string => {
    try {
      const r = jwt.sign({ id: userId }, refresh_token, {
        expiresIn: refresh_expires_time,
      });
      return r;
    } catch (err) {
      throw err;
    }
  };

  verifyAccessToken = (token: string): string | JwtPayload => {
    try {
      const isValidToken = jwt.verify(token, access_token);
      return isValidToken;
    } catch (err) {
      throw err;
    }
  };
  verifyRefreshToken = (token: string): string | JwtPayload => {
    try {
      const isValidRefresh = jwt.verify(token, refresh_token);
      return isValidRefresh;
    } catch (err) {
      throw err;
    }
  };

  decodeToken = (token: string): string | JwtPayload => {
    try {
      const decode = jwt.decode(token);
      if (decode === null) {
        throw new Null_Object_Error();
      }
      return decode;
    } catch (err) {
      throw err;
    }
  };
}
