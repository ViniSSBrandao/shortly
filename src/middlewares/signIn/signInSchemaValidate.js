import { loginSchema } from "../../models/schemas/loginSchema.js";

export default async function(req, res, next){
    const { email, password } = req.body;
    try {
        const {error} = loginSchema.validate({ email, password }, {abortEarly: false});
        
       if(error){
            return res.status(422).send(error.message);
       }
        next();
    } catch (error) {
        return res.send(error.message);
    }
}