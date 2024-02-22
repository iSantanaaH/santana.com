import { Request, Response, NextFunction } from "express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //RECEBER O TOKEN
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res
      .status(401)
      .json({ message: "Você precisa estar logado para realizar esta ação" });
  }

  const token = authToken.split("");
}
