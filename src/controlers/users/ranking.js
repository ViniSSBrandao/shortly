import { db } from "../../config/database/databaseConnection.js"

export default async function(req, res){
    try {
        const urls = await db.query(`
        SELECT users.id, users.name, count("shortenUrls"."userId") AS "linksCount", 
        sum("shortenUrls"."visitCount") AS "visitCount" 
         FROM "users"
         LEFT JOIN "shortenUrls" ON "shortenUrls"."userId" = users.id 
         GROUP BY users.id
         ORDER BY "visitCount" desc LIMIT 10
          `)

        return res.send(urls.rows)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}