import { Router } from "express";
import verifySession from "../middlewares/verifySession.js";

export const urlRouter = Router();

urlRouter.post("/urls/shorten", verifySession)