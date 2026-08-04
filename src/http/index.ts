import "reflect-metadata";
import express from "express";
import cors from "cors";
import { allowedDomains } from "../env/env.zod";
import healthCheckRouter from "../app/router/app.route";
import databaseSource from "../infra/database/router/db.router";
import huggingFaceRouter from "../domains/llm/router/ai.router";
import { errorMiddleware } from "../middlewares/error-middleware";
import rabbitRouter from "../infra/queue/rabbitmq/router/rabbit.router"; 
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
application.use("/", databaseSource);
application.use("/ai", huggingFaceRouter);
application.use("/", rabbitRouter);
application.use(errorMiddleware);

export default application;
