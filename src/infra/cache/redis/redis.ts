import {createClient } from 'redis';
import { env } from '../../../env/env.zod';
import { RedisError } from '../../../errors/redis-error';
const redisUrl = env.REDIS_URL as string;
export const cacheRedis = createClient({
    url: redisUrl
});

