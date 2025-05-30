import { prisma } from "@/lib/prisma";
import { RegisterType } from "@/lib/validators/register";

export async function getUserInfo() {
  const userInfo = await prisma.user_info.findMany();
  return userInfo;
}

export async function checkUsernameExists(username: string): Promise<boolean> {
  const user = await prisma.user_info.findUnique({
    where: { user_name: username },
  });
  return user !== null;
}
