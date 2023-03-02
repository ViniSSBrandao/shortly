import { Router } from "express";
import deleteUrlController from "../controlers/urls/deleteUrlController.js";
import getUrlById from "../controlers/urls/getUrlById.js";
import redirectUrl from "../controlers/urls/redirectUrl.js";
import shortenController from "../controlers/urls/shortenController.js";
import { validateDeleteUrl, verifyUrlUser } from "../middlewares/urls/delete/deleteUrlMiddleware.js";
import shortenUrlMiddleware from "../middlewares/urls/shorten/shortenUrlMiddleware.js";

import verifySession from "../middlewares/verifySession.js";

export const urlRouter = Router();

urlRouter.post("/urls/shorten", verifySession, shortenUrlMiddleware, shortenController)
urlRouter.get("/urls/:id", getUrlById)
urlRouter.get("/urls/open/:shortUrl", redirectUrl)
urlRouter.delete("/urls/:id", verifySession, validateDeleteUrl, verifyUrlUser, deleteUrlController)
