import express, {Express, Request, Response, NextFunction} from 'express';
import * as bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import {dbConnect} from './models/database'

const app: Express = express();

app.use(bodyParser.json());

dotenv.config();

const port: number = Number(process.env.PORT) || 3001;

app.listen(port, () => {
   console.log(`server listening on port: ${port}`) 
})

dbConnect();

app.post('/sign-in', async (req: Request, res: Response) => {
    console.log(await req.body);
    res.sendStatus(200)
})