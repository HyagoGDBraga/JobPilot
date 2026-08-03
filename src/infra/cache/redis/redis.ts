import {createClient } from 'redis';
import { env } from '../../../env/env.zod';
import { RedisError } from '../../../errors/redis-error';
const redis_url = env.REDIS_URL as string;
export const cache_redis = createClient({
    url: redis_url
});

