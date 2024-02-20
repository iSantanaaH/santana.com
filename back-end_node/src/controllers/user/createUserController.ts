import { Request, Response } from "express";

const createUserController = (req: Request, res: Response) => {
  const { name, cpf, email, password, gender, birthdate, phone } = req.body;

  const formattedData = {
    name: name,
    email: email,
    gender: gender.toLowerCase(),
    cpf: cpf.replace(/[^\d]/g, ""),
    birthdate: birthdate.replace(/[^\d]/g, ""),
    phone: phone.replace(/[^\d]/g, ""),
  };

  if (!name || !cpf || !email || !password || !gender || !birthdate || !phone) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos precisam ser preenchidos" });
  } else {
    return res.status(200).json({
      nome: name,
      cpf: cpf,
      email: email,
      password: password,
      sexo: gender,
      aniversário: birthdate,
      telefone: phone,
    });
  }
};

export default createUserController;
