import bcrypt from "bcrypt";
import { UndefinedError } from "../../../errors/undefined-error";
export class BCrypt_Service {
  private readonly hashsObjects: string[] = [];
  private readonly getHashRounds: number[] = [];
  genSalt = async (salt: number): Promise<string> => {
    try {
      let gen = await bcrypt.genSalt(salt);
      if (gen == undefined) {
        throw new UndefinedError();
      }
      return gen;
    } catch (err) {
      throw err;
    }
  };

  hash256 = async (object: any, salt: number): Promise<string> => {
    try {
      const hash = await bcrypt.hash(object, await this.genSalt(salt));
      this.hashsObjects.push(hash);
      return hash;
    } catch (err) {
      throw err;
    }
  };

  getRounds = async (): Promise<number> => {
    try {
      for (const elements of this.hashsObjects) {
        const round = await bcrypt.getRounds(elements);
        this.getHashRounds.push(round);
      }
      return 0;
    } catch (err) {
      throw err;
    }
  };

  //Implementar com ID de user
  getHashedRounds = (): number[] | string => {
    try {
      return `Cost factor: \n` + this.getHashRounds;
    } catch (err) {
      throw err;
    }
  };

  compareHash = async (object: string, hash: string): Promise<boolean> => {
    try {
      const is_Hash = await bcrypt.compare(object, hash);
      return is_Hash;
    } catch (err) {
      throw err;
    }
  };
  syncHash = (object: string, salt: number): string => {
    try {
      let hash = bcrypt.hashSync(object, this.syncGenSalt(salt));
      return hash;
    } catch (err) {
      throw err;
    }
  };

    syncGenSalt = (salt: number):string =>{
      try{
        let genSalt = bcrypt.genSaltSync(salt);
        return genSalt;
      }catch (err) {
      throw err;
    }
  };
  syncCompare = (object: string, hash: string): boolean => {
    try {
      const compare = bcrypt.compareSync(object, hash);
      return compare;
      return true;
    } catch (err) {
      throw err;
    }
  };



}
