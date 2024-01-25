import { Request, Response } from "express";

const createUserController = (req: Request, res: Response) => {
  const { name, cpf, email, gender, birthday, phone } = req.body;
  console.log(req.body);

  console.log(
    `nome: ${name} cpf: ${cpf} email: ${email} gênero: ${gender} aniversário: ${birthday} telefone: ${phone}`
  );

  return res.status(200).json({
    nome: name,
    cpf: cpf,
    email: email,
    sexo: gender,
    aniversário: birthday,
    telefone: phone,
  });
};

export default createUserController;
