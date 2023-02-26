import bcrypt from 'bcrypt'

export default async function(req, res){
    const { name, email, password } = req.body;
    try{
        
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await db.query("INSERT INTO customers (name, password, email) VALUES ($1, $2, $3)", [name, hashedPassword, email]) 
        
        return res.status(201).send("registered user");
    }
    catch(error){
        return res.send(error.message).status(500)
    }

}