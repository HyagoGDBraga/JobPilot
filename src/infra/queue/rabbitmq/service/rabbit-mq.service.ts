import { HealthCheckResult } from "../../../../types";
import { RabbitMQ } from "../rabbit-mq";
export class RabbitMQ_Service{
    private readonly rabbitMq: RabbitMQ;    
    constructor(rabbitMq: RabbitMQ){
        this.rabbitMq = rabbitMq;
    };
    healthCheck = async():Promise<HealthCheckResult>=>{
        try{
            const result = await this.rabbitMq.startConnectionRabbitMQ();
            return {
                result: result,
                message: `Ok, rabbit is start connection`,
            };
        }catch(err){
            throw err;
        }
    }
};