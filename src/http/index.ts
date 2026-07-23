import { startRedis_connection } from "../cache/redis/redis";
import express from "express";
import cors from "cors";
import { allowedDomains } from "../env/env.zod";
import healthCheckRouter from "../app/router/app.route";
import database_Source from "../infra/database/router/db.router";
import hugging_FACE from "../domains/llm/router/ai.router";
import { errorMiddleware } from "../middlewares/error-middleware";
const application = express();

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, success?: boolean) => void,
  ) => {
    if (!origin || !allowedDomains.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origem não permitida"));
    }
  },
  credentials: true,
};
application.use(express.json());
application.use(cors(corsOptions));
application.use("/", healthCheckRouter);
application.use("/", database_Source);
application.use("/ai", hugging_FACE);
application.use(errorMiddleware);

export default application;
