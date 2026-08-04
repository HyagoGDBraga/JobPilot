import os
import re
from pathlib import Path

mapping = {
    'App_Service': 'AppService',
    'App_Controller': 'AppController',
    'app_service': 'appService',
    'app_controller': 'appController',
    'health_check_app': 'healthCheckApp',
    'Redis_Service': 'RedisService',
    'Redis_Controller': 'RedisController',
    'redis_s': 'redisService',
    'redis_c': 'redisController',
    'startRedis_connection': 'startRedisConnection',
    'redis_Check_Health': 'redisCheckHealth',
    'cache_redis': 'cacheRedis',
    'redis_url': 'redisUrl',
    'Db_Service': 'DbService',
    'Db_Controller': 'DbController',
    'db_service': 'dbService',
    'db_controller': 'dbController',
    'db_Service': 'dbService',
    'health_Check_Database': 'healthCheckDatabase',
    'Jwt_Service': 'JwtService',
    'BCrypt_Service': 'BCryptService',
    'Initialize_Error': 'InitializeError',
    'MissingToken_ERROR': 'MissingTokenError',
    'Null_Object_Error': 'NullObjectError',
    'Role_Error': 'RoleError',
    'payload_jwt': 'payloadJwt',
    'access_token': 'accessToken',
    'refresh_token': 'refreshToken',
    'refresh_expires_time': 'refreshExpiresTime',
    'rabbit_URL': 'rabbitUrl',
    'HunggingFace_Provider': 'HuggingFaceProvider',
    'C_router': 'CRouter',
    'get_Endpoint': 'getEndpoint',
    'database_Source': 'databaseSource',
    'hugging_FACE': 'huggingFaceRouter',
    'hf_token': 'hfToken',
}

pattern = re.compile(r"\b(" + "|".join(re.escape(k) for k in mapping.keys()) + r")\b")

changed = []
for root, dirs, files in os.walk('src'):
    for fname in files:
        if fname.endswith(('.ts', '.tsx', '.js', '.jsx')):
            path = Path(root) / fname
            text = path.read_text(encoding='utf-8')
            new_text = pattern.sub(lambda m: mapping[m.group(0)], text)
            if new_text != text:
                path.write_text(new_text, encoding='utf-8')
                changed.append(str(path))

print('changed files:', len(changed))
for p in changed:
    print(p)
