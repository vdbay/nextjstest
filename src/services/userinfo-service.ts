import { prisma } from "@/lib/prisma";

export async function getUserInfo() {
  const userInfo = await prisma.user_info.findMany();
  return userInfo;
}

export async function getUserInfoByEmail(email: string) {
  const userInfo = await prisma.user_info.findUnique({
    where: { user_email: email },
  });
  return userInfo;
}

export async function checkUsernameExists(username: string): Promise<boolean> {
  const user = await prisma.user_info.findUnique({
    where: { user_name: username },
  });
  return user !== null;
}

export async function checkEmailExists(email: string): Promise<boolean> {
  const user = await prisma.user_info.findUnique({
    where: { user_email: email },
  });
  return user !== null;
}

export async function registerUserInfo(email: string, username: string) {
  const userExists = await checkUsernameExists(username);
  if (userExists) {
    username = username + "_" + new Date().getTime();
  }

  const newUser = await prisma.user_info.create({
    data: {
      user_email: email,
      user_name: username,
    },
  });

  if (!newUser) {
    return {
      data: false,
      message: "Failed to register user",
    };
  }

  return {
    data: true,
    message: "User registered successfully",
  };
}
