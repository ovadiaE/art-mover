import {Client} from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

export const dbConnect = async () => {

    const client = new Client({
        host: process.env.DB_ENDPOINT,
        user: process.env.DB_USERNAME,
        port: Number(process.env.DB_PORT),
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    
    client.connect();

    client.query('SELECT * FROM producer', (err, res) => {
        console.log(err ? err.stack : res.rows[0]);
        client.end()
      })
};