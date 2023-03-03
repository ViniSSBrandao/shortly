import { db } from "../../config/database/databaseConnection.js";
export default async function(req, res){
    try {
        const {id} = req.params;
        const findUrl = await db.query(`SELECT * FROM "shortenUrls" WHERE "id" = $1`, [id])
        if(!findUrl.rowCount){
            return res.sendStatus(404)
        }
        const urlId = findUrl.rows[0].id
        const { url, shortUrl} = findUrl.rows[0]
        return res.status(200).send({id: urlId, url, shortUrl})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
