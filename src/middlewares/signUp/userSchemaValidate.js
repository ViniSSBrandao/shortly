import { userSchema } from "../../models/schemas/userSchema.js";

export default async function(req, res, next){
    const {name, email, password, confirmPassword} = req.body;
    try {
        const {error} = userSchema.validate({name, email, password, confirmPassword}, {abortEarly: false});
        if(password != confirmPassword){
            return res.sendStatus(422);
        }
       if(error){
            return res.status(422).send(error.message);
       }
        next();
    } catch (error) {
        return res.send(error.message);
    }
}