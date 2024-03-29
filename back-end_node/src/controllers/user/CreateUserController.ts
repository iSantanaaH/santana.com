import { Request, Response } from "express";
import * as CreateUserService from "../../services/user/CreateUserService";

async function CreateUserController(req: Request, res: Response) {
  const { name, cpf, email, password, gender, birthdate, phone } = req.body;

  const formattedData = {
    name: name,
    email: email,
    password: password,
    gender: gender.toLowerCase(),
    cpf: cpf.replace(/[^\d]/g, ""),
    birthdate: birthdate.replace(/[^\d]/g, ""),
    phone: phone.replace(/[^\d]/g, ""),
    status: true,
    role: "USER",
  };

  if (!name || !cpf || !email || !password || !gender || !birthdate || !phone) {
    return res
      .status(400)
      .json({ message: "Todos os campos precisam ser preenchidos" });
  } else {
    try {
      const regexEmail: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
      const nameParts = formattedData.name.trim().split(" ");
      const allowedGenders = ["masculino", "feminino", "não informado"];

      if (nameParts.length < 2 || nameParts[1].length === 0) {
        return res.status(400).json({ error: "Seu nome precisa ser completo" });
      }
      if (formattedData.cpf.length !== 11) {
        return res.status(400).json({ error: "Formato de CPF inválido" });
      }
      if (!regexEmail.test(formattedData.email)) {
        return res.status(400).json({ error: "Formato de email inválido" });
      }
      if (formattedData.password.length < 8) {
        return res
          .status(400)
          .json({ error: "A senha deve conter no mínimo 8 dígitos" });
      }
      if (!allowedGenders.includes(formattedData.gender)) {
        return res
          .status(400)
          .json({ error: "Valor inválido para o campo gênero" });
      }
      if (formattedData.birthdate.length < 8) {
        return res.status(400).json({ error: "Formato de data inválida" });
      }
      if (formattedData.phone < 11) {
        return res.status(400).json({ error: "Formato de telefone inválido" });
      }

      const existingUser = await CreateUserService.existingUserService(
        formattedData.email,
        formattedData.cpf
      );

      if (existingUser.existingUserByEmail) {
        return res.status(400).json({ error: `Este email já está em uso` });
      }
      if (existingUser.existingUserByCpf) {
        return res.status(400).json({ error: `Este CPF já está em uso` });
      }

      const newUser = await CreateUserService.createUserService(formattedData);

      return res
        .status(200)
        .json({ message: "Usuário criado com sucesso" });
    } catch (error: any) {
      console.error("Erro ao criar o usuário", error.message);
      return res.status(400).json({ error: "Erro interno do servidor" });
    }
  }
}

export default CreateUserController;
