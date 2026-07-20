import application from "../http";
import { env } from "../../env/env.zod";

application.listen(env.PORT,()=>{
    console.log(`Server is Running on Port${env.PORT}`);
})

export default application;