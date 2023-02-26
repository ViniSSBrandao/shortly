import { Router } from "express";
import userSchemaValidate from "../middlewares/signUp/userSchemaValidate.js";


const signUpRouter = Router();

signUpRouter.post('/sign-up', userSchemaValidate)

export default signUpRouter;