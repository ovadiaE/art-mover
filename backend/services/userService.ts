import db from '../models/database'

export const dummyFunc = () => {
    return "hello world"
}

export const registerProducer = async (email: string, password: string) => {
    const result = await db.query(`SELECT * FROM producer`, [])
    console.log('result', result.rows)
    //should salt and hash password
    //stores email and password in postgres
    return
}