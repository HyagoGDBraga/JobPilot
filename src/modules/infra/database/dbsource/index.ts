import { DataSource } from "typeorm";
import { env } from "../../../../env/env.zod";
const database_host = env.DATABASE_HOST as string;
const database_name = env.DATABASE_NAME as string;
const database_user = env.DATABASE_USER as string;
const database_password = env.DATABASE_PASSWORD as string;

const dataSource = new DataSource({
    type: 'postgres',
    username: database_user,
    host: database_host,
    database: database_name,
    password: database_password,
     synchronize: true,
    entities: []
});

export default dataSource;