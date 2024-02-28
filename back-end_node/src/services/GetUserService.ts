import prismaClient from "../prisma";
import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: number;
}

export async function getAllUserService(token: string) {
  if (!token) {
    throw new Error(`Token não informado`);
  } else {
    try {
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as TokenPayload;
      const getUser = await prismaClient.user.findUnique({
        where: {
          id: decodedToken.userId,
        },
      });
      return getUser;
    } catch (error: any) {
      console.error(`Error in get user: ${error.message}`);
    }
  }
}
