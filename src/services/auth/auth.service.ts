import express, { Application } from "express";
import * as controller from "./auth.controller";

const authRouter = express.Router();

export default function authService(app: Application) {
  authRouter.post("/signup", controller.signup);
  authRouter.post("/signin", controller.signup);
  authRouter.post("/signout", controller.signup);
  authRouter.post("/signoff", controller.signup);
  app.use("/auth", authRouter);
}
