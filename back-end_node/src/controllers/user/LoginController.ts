import { Request, Response } from "express";
import * as AuthService from "../../services/user/AuthUserService";

export default async function LoginController(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const authUser = await AuthService.authUserService(email, password);

    if (!authUser) {
      return res.status(400).json({ error: "Email ou senha inválidos" });
    }

    const token = await AuthService.generateToken(
      authUser.id,
      authUser.name,
      authUser.role
    );
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(400).end();
  }
}
