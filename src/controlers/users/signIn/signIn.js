import { v4 as uuidV4 } from "uuid";
import bcrypt from 'bcrypt'
import { db } from "../../../config/database/databaseConnection.js";

export default async function(req, res){
    
    try {
        const {email, password} = req.body
        const checkUser = await db.query(
            `SELECT * FROM users
            WHERE email=$1;`,
            [email]);
        if(!checkUser.rowCount){
            return res.sendStatus(401)
        }
        const isCorrectPassword = bcrypt.compareSync(password, checkUser.rows[0].password)
        if(!isCorrectPassword){
            return res.sendStatus(401)
        }
        const token = uuidV4() 
        console.log(checkUser.rows[0].id)
        const sessions = await db.query(
            `INSERT INTO sessions
            (token, userId) VALUES ($1, $2);`,
            [token, checkUser.rows[0].id]);

        
        
        return res.send({token}).status(200)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}