import { shortenSchema } from "../../../models/schemas/shortenUrlSchema.js";

export default async function(req, res, next){
    try {
        const { url } = req.body;
        const {error} = shortenSchema.validate({url});
        if(error){
            return res.status(422).send(error.message);
       }
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}