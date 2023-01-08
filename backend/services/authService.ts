import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import {Token} from '../models/types'

dotenv.config();


//checks request for valid jwt token
export const authenticate = (req: Request, res: Response, next: NextFunction): any => {
    
    const token = req.cookies.token;
    
    if(!token){
        res.status(401).send({auth: false, message: 'no token provided'});
    }
    
    try{
        
        let secret_key: string = process.env.SECRET_KEY as string;
        
        let decoded = jwt.verify(token, secret_key) as Token;
        req.body.userId = decoded.user
        
        if(req.body.userId){
            next()
        }
        
    }
    catch(error:any){
        
        if(error.toString() === 'TokenExpiredError: jwt expired'){
             res.status(300).send({auth:false, message:'Token Timed out'});
        }
    }
}
