import { Router } from "express";
import shortenController from "../controlers/urls/shorten/shortenController.js";
import shortenUrlMiddleware from "../middlewares/urls/shorten/shortenUrlMiddleware.js";

import verifySession from "../middlewares/verifySession.js";

export const urlRouter = Router();

urlRouter.post("/urls/shorten", verifySession, shortenUrlMiddleware, shortenController)