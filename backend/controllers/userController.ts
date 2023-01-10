import { Request, Response } from 'express'
import * as types from '../models/types'
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
            
            return res.cookie("token",token, {
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
export const getCollections = async (req: Request, res: Response): Promise<void> => {
    try {
        const collections = await UserService.getCollections(req.body.userId) 
        
        const properties  = collections.map((row: types.Collection) => {
            return {name: row.name, id:row.uuid}
        })
        
        res.status(200).send(properties)
    
    } catch (error) {
        res.sendStatus(500)
    }
}

export const createCollection = async (req: Request, res: Response): Promise<void> => {
    try{
        let result = await UserService.createCollection(req.body.userId, req.body.name)
        
        if(result){
            res.status(201).send({message: "created collection"})
        }
    }
    catch(error:any) {
        if(error.code === '23505'){
            res.status(300).send({message:'collection name already exists'});
        }
        
    }
}