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
            res.status(200).send({
                message: 'email already exists'
            })
            return
        }
        res.sendStatus(500)
    }
}


export const login = async (req: Request, res: Response): Promise<any> => {
    
    try {
        
        const producer = await UserService.login(req.body.email, req.body.password)

        if(producer){
            
            let token = UserService.generateToken(producer)
            return res.cookie("access_token",token, {
                httpOnly:true,
            }).status(200).json({message:"logged in succesfully"})
        }
        else{
            res.status(403).send({
                message: `User does not exist`
            })
        }
    } 
    catch (error) {
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