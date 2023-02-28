import { nanoid } from "nanoid";

export default async function(req, res){
    try {
        const {url} = req.body;
        const shortenUrl = nanoid();
        console.log(shortenUrl)
        res.status(200).send(shortenUrl)
    } catch (error) {
        return res.send(error.message);
    }
}