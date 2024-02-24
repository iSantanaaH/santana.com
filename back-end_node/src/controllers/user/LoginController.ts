import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export default async function LoginController(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const authUser = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    if (!authUser) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    const token = jwt.sign(
      { userId: authUser.id, user_name: authUser.name },
      process.env.JWT_SECRET as string
    );
    return res
      .status(200)
      .json({ message: "Sucesso ao realizar login", token: token });
  } catch (error) {
    return res.status(400).end();
  }
}
