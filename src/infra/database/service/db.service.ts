import { DataSource } from "typeorm";
import dataSource from "../dbsource"
import { Initialize_Error } from "../../../errors/initialize-error";
export class Db_Service { 
 
    dbIsRunning = async()=>{
        const result = await dataSource.initialize();
        const message: string = `Database is running!`
        if(!result){
            throw new Initialize_Error();
        } 
        console.log(`Successful!! Database is CONNECTED!`);
        return {
            message: message,
            status: "ok",
            timestamp: new Date()
        }
    
    }
}