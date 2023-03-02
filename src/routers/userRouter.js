import { Router } from "express";
import ranking from "../controlers/users/ranking.js";
import signIn from "../controlers/users/signIn/signIn.js";
import signUp from "../controlers/users/signUp/signUp.js";
import usersMe from "../controlers/users/usersMe.js";
import signInSchemaValidate from "../middlewares/signIn/signInSchemaValidate.js";
import userSchemaValidate from "../middlewares/signUp/userSchemaValidate.js";
import verifySession from "../middlewares/verifySession.js";


const userRouter = Router();

userRouter.post('/sign-up', userSchemaValidate, signUp)
userRouter.post('/sign-in', signInSchemaValidate, signIn)
userRouter.get('/users/me', verifySession, usersMe)
userRouter.get("/ranking", ranking)


export default userRouter;