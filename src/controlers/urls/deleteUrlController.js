import { db } from "../../config/database/databaseConnection.js";

export default async function(req, res){
    try {
        const {id} = req.params;
        await db.query(`DELETE FROM "shortenUrls" WHERE id = $1;`, [id])
        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).send(error.message);
    }
}