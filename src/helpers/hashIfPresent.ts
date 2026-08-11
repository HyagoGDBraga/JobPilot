import { BCryptService } from "../infra/bcrypt/service/bcrypt.service"
const bcCrypt = new BCryptService();

//excelente pra patch.
export const hashIfPresent = async<T extends {password?: string}>(data: T):Promise<T> =>{
         if (!data.password) return data;
  return { ...data, password: await bcCrypt.hash256(data.password, 10) };
}