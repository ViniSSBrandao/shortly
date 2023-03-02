import { nanoid } from "nanoid";
import { db } from "../../config/database/databaseConnection.js";

export default async function(req, res){
    try {
        const { url } = req.body;
        const { userId } = res.locals
        const shortenUrl = nanoid(8);

        
        const saveUrl = await db.query(`INSERT INTO "shortenUrls" ("userId", url, "shortUrl") VALUES ($1,$2,$3)`, [userId, url, shortenUrl])
        const newUrl = await db.query(`SELECT * FROM "shortenUrls" where "shortUrl" = $1`, [shortenUrl])
        
        console.log(newUrl.rows)

        res.status(201).send({ id : newUrl.rows[0].id, shortUrl: shortenUrl})
    } catch (error) {
        return res.send(error.message);
    }
}