import { db } from "../config/database/databaseConnection.js";


export default async function(req, res, next){
    try {
        const { authorization } = req.headers;
        const token = authorization;

        const entrieData= await db.query(`
        SELECT * FROM sessions
        WHERE token=$1
        `, [token])

        console.log(token)
        if(!entrieData.rowCount){
            return res.sendStatus(401);
        }
        next()
    } catch (error) {
        return res.status(500).send(error.message)
    }
}