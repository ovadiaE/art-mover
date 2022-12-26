import { Request, Response } from 'express'

import * as UserService from '../services/userService'

export const registerProducer = async (req: Request, res: Response): Promise<void> => {
    try {
        const success = await UserService.registerProducer(req.body.email, req.body.password)

        if (!success) {
           res.status(400).send({
                message: 'something went wrong'
            })
            return
        }
        res.send({})
    } 
    catch (error) {
        console.log('registerProducer failed with error:', error)
        if (String(error).match(/email_unique/)) {
            res.status(500).send({
                message: 'email already exists'
            })
            return
        }
        res.sendStatus(500)
    }
}


export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        res.send({})
    } catch (error) {
        res.sendStatus(500)
    }
}

//queries postgres for all relevant data about producer and producer's products
export const getProducerInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        res.send({})
    } catch (error) {
        res.sendStatus(500)
    }
}