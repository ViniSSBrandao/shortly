import { Router } from "express";
import signUp from "../controlers/signUp/signUp.js";
import userSchemaValidate from "../middlewares/signUp/userSchemaValidate.js";


const signUpRouter = Router();

signUpRouter.post('/sign-up', userSchemaValidate, signUp)

export default signUpRouter;