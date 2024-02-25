import prismaClient from "../../prisma";

interface FormattedDataProps {
  name: string;
  email: string;
  password: string;
  gender: string;
  cpf: string;
  birthdate: string;
  phone: string;
  status: boolean;
  role: string;
}

export async function existingUserService(email: string, cpf: string) {
  try {
    const existingUserByEmail = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    const existingUserByCpf = await prismaClient.user.findUnique({
      where: {
        cpf: cpf,
      },
    });

    return { existingUserByEmail, existingUserByCpf };
  } catch (error: any) {
    console.error(`Error in search user ${error.message}`);
    throw error;
  }
}

export async function createUserService(formattedData: FormattedDataProps) {
  try {
    const newUser = await prismaClient.user.create({
      data: formattedData,
    });
    return newUser;
  } catch (error: any) {
    console.error(`Error in create a new user: ${error.message}`);
  }
}
