import { Application } from "express";
import authService from "./auth/auth.service";

export default function services(app: Application) {
  authService(app);
}
