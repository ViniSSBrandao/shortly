import { Router } from "express";
import signIn from "../controlers/signIn/signIn.js";
import signUp from "../controlers/signUp/signUp.js";
import signInSchemaValidate from "../middlewares/signIn/signInSchemaValidate.js";
import userSchemaValidate from "../middlewares/signUp/userSchemaValidate.js";


const userRouter = Router();

userRouter.post('/sign-up', userSchemaValidate, signUp)
userRouter.post('/sign-in', signInSchemaValidate, signIn)

export default userRouter;