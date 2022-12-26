import {Request, Response, NextFunction} from 'express'

//checks request for valid jwt token
export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization
    console.log('token', token)
    next()
}
