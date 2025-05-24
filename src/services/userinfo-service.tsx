import { prisma } from "@/lib/prisma";
import { RegisterType } from "@/lib/validators/register";

export async function getUserInfo() {
  const userInfo = await prisma.user_info.findMany();
  return userInfo;
}
