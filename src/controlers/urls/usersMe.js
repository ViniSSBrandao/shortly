import { db } from "../../config/database/databaseConnection.js";

export default async function(req, res){
    try {
        const {token} = res.locals;
        const user = await db.query(`SELECT * FROM sessions WHERE token = $1`, [token])
        const {userid} = user.rows[0]
         
        const userUrls = await db.query(`SELECT * FROM "shortenUrls" WHERE "userId" = $1`, [userid]);
        console.log(user.rows)
        console.log(userid)
        return res.send(userUrls.rows)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}