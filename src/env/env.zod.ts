import dotenv from 'dotenv';
import z from "zod";
const nodeEnv = process.env.NODE_ENV ?? "development";

dotenv.config({
    path: `.env.${nodeEnv}`
});


export const envZod = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  HF_TOKEN: z.string(),

  PORT: z.coerce.number().default(3000),

  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().default(5432),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),

  JWT: z.string().min(32),
  JWT_REFRESH: z.string().min(32),
  JWT_EXPIRES_IN: z.string(),
  REFRESH_EXPIRES_IN: z.string(),

  FRONTEND_URL: z.string().url(),
  UPLOAD_DIR: z.string(),

  ALLOWED_DOMAINS: z.string(),
  SERVER_URL: z.string(),
  REDIS_URL: z.string(),
  RABBITMQ_URL: z.string(),

  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

export const env = envZod.parse(process.env);

export const allowedDomains = env.ALLOWED_DOMAINS
  .split(",")
  .map((domain) => domain.trim());