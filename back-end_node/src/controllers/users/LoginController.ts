import { Request, Response } from "express";

function LoginController(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.status(400).json({ mensagem: "Existem campos vazios!" });
  } else {
    return res.status(200).json({ email: email, password: password });
  }
}

export default LoginController;
