import { env } from "../../env/env.zod";
const urlServer = env.SERVER_URL as string;
const port = env.PORT || 3000;
export class AppService {
  constructor() {}
  healthCheck = async () => {
    const result: string = `Server is Running on Port ${port}`;
    return {
      result: result,
      server: urlServer,
      status: "Ok",
      timestamp: new Date()
    };
}
}