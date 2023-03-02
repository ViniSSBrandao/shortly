import { db } from "../../../config/database/databaseConnection.js";
import { idSchema } from "../../../models/schemas/urlDeleteSchema.js";



export async function validateDeleteUrl(req, res, next){
    try {
        const {id} = req.params;
        const {error} = idSchema.validate({id})
        if(error){
            return res.sendStatus(401)
        }
        next()
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function verifyUrlUser(req, res, next){
    try {
        const {token} = res.locals;
        const {id} = req.params;
        const verifyId = await db.query(`SELECT * FROM "shortenUrls" where id = $1`, [id])
        const verifyUser = await db.query(`SELECT * FROM sessions where token = $1`, [token])
        console.log(verifyId.rows)
        console.log(verifyUser.rows)
        if(verifyId.rows[0].userId != verifyUser.rows[0].id){
            return res.status(401).send("this url belongs to another user")
        }
        return res.send(token)
        next()
    } catch (error) {
         return res.status(500).send(error.message)
    }
}