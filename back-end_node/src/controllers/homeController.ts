// controllers/homeController.ts
import { Request, Response } from "express";

const homeController = (req: Request, res: Response) => {
    const { name, lastName } = req.body;

    if (!name || !lastName) {
      return res.status(400).json({ mensagem: "Parâmetros não encontrados" });
    } else {
      return res
        .status(200)
        .json({ mensagem: `Usuário ${name} ${lastName} cadastrado com sucesso` });
    }
};

export default homeController;
