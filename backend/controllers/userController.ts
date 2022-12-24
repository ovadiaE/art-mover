import { Request, Response } from 'express'

import * as UserService from '../services/userService'

export const registerProducer = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(400).send({
                message: 'Email and password are required'
            })
            return
        }
        await UserService.registerProducer(req.body.email, req.body.password)
        res.send({}).status(200)
    } catch (error) {
        res.sendStatus(500)
    }
}