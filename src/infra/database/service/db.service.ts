import { DataSource } from "typeorm";
import dataSource from "../dbsource"
import { InitializeError } from "../../../errors/initialize-error";
export class DbService { 
 
    dbIsRunning = async()=>{
        const result = await dataSource.initialize();
        const message: string = `Database is running!`
        if(!result){
            throw new InitializeError();
        } 
        console.log(`Successful!! Database is CONNECTED!`);
        return {
            message: message,
            status: "ok",
            timestamp: new Date()
        }
    
    }
}