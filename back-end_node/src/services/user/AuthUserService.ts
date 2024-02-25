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
  } catch (error) {}
}

export async function generateToken(userId: number, userName: string) {
  try {
    const token = await jwt.sign(
      { userId: userId, userName: userName },
      process.env.JWT_SECRET as string
    );

    console.log("Generated Token:", token);

    return token;
  } catch (error: any) {
    console.error("Error in generateToken:", error.message);
  }
}
