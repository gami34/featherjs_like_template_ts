import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
  res.json({ success: true, messae: true });
};