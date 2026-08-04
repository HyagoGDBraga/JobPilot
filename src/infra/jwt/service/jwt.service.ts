import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { payloadJwt } from "../payload/payload";
import { env } from "../../../env/env.zod";
import { NullObjectError } from "../../../errors/null-object-error";
const accessToken = env.JWT as string;
const refreshToken = env.JWT_REFRESH as string;
const expiresTime = env.JWT_EXPIRES_IN as SignOptions["expiresIn"];
const refreshExpiresTime = env.REFRESH_EXPIRES_IN as SignOptions["expiresIn"];
export class JwtService {
  accessToken = (payload: payloadJwt): string => {
    try {
      const t = jwt.sign(
        { id: payload.id, email: payload.email, role: payload.role },
        accessToken,
        { expiresIn: expiresTime },
      );
      return t;
    } catch (err) {
      throw err;
    }
  };

  refreshToken = (userId: string): string => {
    try {
      const r = jwt.sign({ id: userId }, refreshToken, {
        expiresIn: refreshExpiresTime,
      });
      return r;
    } catch (err) {
      throw err;
    }
  };

  verifyAccessToken = (token: string): string | JwtPayload => {
    try {
      const isValidToken = jwt.verify(token, accessToken);
      return isValidToken;
    } catch (err) {
      throw err;
    }
  };
  verifyRefreshToken = (token: string): string | JwtPayload => {
    try {
      const isValidRefresh = jwt.verify(token, refreshToken);
      return isValidRefresh;
    } catch (err) {
      throw err;
    }
  };

  decodeToken = (token: string): string | JwtPayload => {
    try {
      const decode = jwt.decode(token);
      if (decode === null) {
        throw new NullObjectError();
      }
      return decode;
    } catch (err) {
      throw err;
    }
  };
}
