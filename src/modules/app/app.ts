import application from "../http";
import { env } from "../../env/env.zod";
import { startRedis_connection } from "../../cache/redis/redis";
const PORT = env.PORT || 3000;
async function bootstrap(){
    try{
        await startRedis_connection();

        application.listen(PORT,()=>{
            console.log(`Running on ${PORT}`);
        });
    }catch(err){
        console.error("Failed to start application:", err);
        process.exit(1);
    };
};
bootstrap();

export default application;