import { db } from "../../config/database/databaseConnection.js";

export default async function(req, res){
    try {
        const { userId } = res.locals;
        const user = await db.query(`SELECT * FROM users WHERE id = $1`, [userId])

        const userUrls = await db.query(`SELECT * FROM "shortenUrls" WHERE "userId" = $1`, [userId]);
        
        let visitCount = 0

        for(let i=0; i<userUrls.rowCount; i++){
            visitCount = visitCount += userUrls.rows[i].visitCount
        }
        
        return res.send({id: userId, name: user.rows[0].name, visitCount, shortenedUrls: userUrls.rows})
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}