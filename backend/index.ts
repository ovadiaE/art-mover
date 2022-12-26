import express, {Express, Request, Response, NextFunction} from 'express';
import * as bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import * as UserController from './controllers/userController'
import cors from 'cors'

const app: Express = express();

app.use(bodyParser.json());

app.use(cors({
   origin: 'http://localhost:3000'
 }));

 dotenv.config();

const port: number = Number(process.env.PORT) || 3001;

app.listen(port, () => {
   console.log(`server listening on port: ${port}`) 
})

app.post('/api/register', UserController.registerProducer)