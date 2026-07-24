import {createClient } from 'redis';
import { env } from '../../../env/env.zod';
import { RedisError } from '../../../errors/redis-error';
const redis_url = env.REDIS_URL as string;
export const cache_redis = createClient({
    url: redis_url
});

cache_redis.on("error",err => {
    console.error(`Error in initialize redis ${err}`);
});

export const startRedis_connection = async()=>{
    try{
        await cache_redis.connect();
        if(!cache_redis.isReady){
            throw new RedisError();
        };
        console.log(`Redis running successful`);
        return cache_redis;
    }catch(err){
        if(err instanceof Error){
            throw err;
        }
        }
    };

