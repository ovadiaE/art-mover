import db from '../models/database'
import * as bcrypt from 'bcrypt';
import {uuid} from 'uuidv4'
const INSERT_NEW_PRODUCER = `
INSERT INTO producer (uuid, email, password) VALUES ($1, $2, $3) RETURNING *;

`

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

export const dummyFunc = () => {
    return "hello world"
}

export const registerProducer = async (email: string, password: string) => {
    const hashedPassword = await hashPassword(password)
    const result = await db.query(INSERT_NEW_PRODUCER, [uuid(), email, hashedPassword])
    console.log('result', result.rows)
    //should salt and hash password
    //stores email and password in postgres
    return result.rowCount === 1
}