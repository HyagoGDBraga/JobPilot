import { env } from "../../../env/env.zod";
const url_server = env.SERVER_URL as string;
const port = env.PORT || 3000;
export class App_Service {
  constructor() {}
  healthCheck = async () => {
    const result: string = `Server is Running on Port ${port}`;
    return {
      result: result,
      server: url_server,
      status: "Ok",
      timestamp: new Date()
    };
}
}