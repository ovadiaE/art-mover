import db from '../models/database'
import * as bcrypt from 'bcrypt'
import {uuid} from 'uuidv4'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';

dotenv.config();

const INSERT_NEW_PRODUCER = `INSERT INTO producer (uuid, email, password) VALUES ($1, $2, $3) RETURNING *;`
const INSERT_NEW_COLLECTION = `INSERT INTO collection (uuid, name, size, producer_id) VALUES ($1, $2, $3, $4) RETURNING *;`
const FIND_USER = `SELECT * FROM producer WHERE email = $1`

const saltRounds = 10; // number of salt rounds to use when hashing the password

export async function hashPassword(password: string): Promise<string> {
  // generate a salt
  const salt = await bcrypt.genSalt(saltRounds);

  // hash the password with the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  // compare the plaintext password with the hashed password
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
}

export const registerProducer = async (email: string, password: string) => {
  
  const hashedPassword = await hashPassword(password)
   
  const result = await db.query(INSERT_NEW_PRODUCER, [uuid(), email, hashedPassword])
  
  return result.rowCount === 1
}

export const login = async (email: string, password: string) => {
  
  const producer = await db.query(FIND_USER, [email]);

  //If producer exists in db, verify password and return producer
  if (producer.rows.length === 1) {
    
    const compare = await comparePassword(password, producer.rows[0].password)
    
    return (compare ? producer : false)
  
  }
  return false
}

//need to fix the type here
export const generateToken = (producer: any) => {
  
  const userId = producer.rows[0].uuid
  
  const token = jwt.sign({user: userId, admin: true}, process.env.SECRET_KEY as string, {expiresIn: '30m'});

  return token
}

export const createCollection = async (id:string, name:string) => {
  
  const insert = await db.query(INSERT_NEW_COLLECTION, [uuid(), name, 0, id])
  
  return insert.rowCount === 1

}