import prismaClient from "../../prisma";
import jwt from "jsonwebtoken";

export async function authUserService(email: string, password: string) {
  try {
    const authUser = await prismaClient.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
    return authUser;
  } catch (error: any) {
    console.error(`Error in search user: ${error.message}`);
  }
}

export async function generateToken(
  userId: number,
) {
  try {
    const token = await jwt.sign(
      { userId: userId },
      process.env.JWT_SECRET as string
    );

    return token;
  } catch (error: any) {
    console.error("Error in generateToken:", error.message);
  }
}
