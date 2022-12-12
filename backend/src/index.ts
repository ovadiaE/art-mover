import express, {Express, Request, Response, NextFunction} from 'express';
import * as bodyParser from "body-parser";

const app: Express = express();
app.use(bodyParser.json());

const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('hello world!');
})

app.listen(port, () => {
   console.log(`server listening on port: ${port}`) 
})

app.post('/sign-in', async (req: Request, res: Response) => {
    console.log(await req.body);
    res.sendStatus(200)

})