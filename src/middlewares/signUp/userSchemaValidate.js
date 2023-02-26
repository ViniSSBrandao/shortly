import { userSchema } from "../../models/schemas/userSchema.js";

export default function(req, res, next){
    const {name, email, password, confirmPassword} = req.body
    try {
        const {error} = userSchema.validate({name, email, password, confirmPassword}, {abortEarly: false})
       if(error){
            return res.status(400).send(error);
       }
        next();
    } catch (error) {
        return res.send(error.message)
    }
}