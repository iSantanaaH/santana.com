import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

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
  console.log(token);

  try {
    
  } catch (error) {
    return res.status(401).end();
  }
}
