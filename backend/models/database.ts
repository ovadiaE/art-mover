import {Client} from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    host: process.env.DB_ENDPOINT,
    user: process.env.DB_USERNAME,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
    
client.connect().then(() => {
    console.log('db connected')
})

export default client