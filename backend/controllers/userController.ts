import { Request, Response } from 'express'

import * as UserService from '../services/userService'

export const registerProducer = async (req: Request, res: Response) => {
    try {

        const success = await UserService.registerProducer(req.body.email, req.body.password)
        
        if (!success) {
            return res.status(400).send({
                message: 'something went wrong'
            })
        }
        
        res.send({})
    } 
    catch (error) {
        console.log('registerProducer failed with error:', error)
        res.sendStatus(500)
    }
}