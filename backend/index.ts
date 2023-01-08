import express, {Express, Request, Response, NextFunction} from 'express';
import * as bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv';
import * as UserController from './controllers/userController'
import * as AuthService from './services/authService'
import cors from 'cors'

const app: Express = express();

app.use(bodyParser.json());

app.use(cookieParser());

app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true
}));

dotenv.config();

const port: number = Number(process.env.PORT) || 3002;

app.listen(port, () => {
   console.log(`server listening on port: ${port}`) 
})

app.post('/api/register', UserController.registerProducer)
app.post('/api/login', UserController.login)
app.post('/api/user/create', AuthService.authenticate, UserController.createCollection)
// app.get('/api/user/info', AuthService.authenticate ,UserController.getProducerInfo)