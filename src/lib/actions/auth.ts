"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { ActionEnum, LoginType, RegisterType } from "@/lib/validators/auth";
import { generateRedirectUrl } from "../auth";
import {
  checkEmailExists,
  checkUsernameExists,
  getUserInfoByEmail,
} from "@/services/userinfo-service";

export async function register(formData: RegisterType, next: string) {
  if (await checkUsernameExists(formData.username)) {
    return {
      data: false,
      message: "Username already exists, please choose another one.",
    };
  }

  if (await checkEmailExists(formData.email)) {
    return {
      data: false,
      message: "Email already exists, please choose another one.",
    };
  }

  const supabase = await createClient();

  const emailRedirectTo = generateRedirectUrl(
    "email",
    ActionEnum.Register,
    next,
    Date.now().toString(),
    formData.username
  );

  const { error } = await supabase.auth.signInWithOtp({
    email: formData.email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: emailRedirectTo,
    },
  });

  if (error) {
    return {
      data: false,
      message: error.message,
    };
  }

  revalidatePath("/", "layout");
  return {
    data: true,
    message: "Email sent, please check your email !",
  };
}

export async function login(formData: LoginType) {
  const emailRedirectTo =
    process.env.EMAIL_REDIRECT_TO ?? "http://localhost:3000";

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOtp({
    email: formData.email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: emailRedirectTo,
    },
  });

  if (error) {
    return {
      data: false,
      message: error.message,
    };
  }

  revalidatePath("/", "layout");
  return {
    data: true,
    message: "Email sent, please check your email !",
  };
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  revalidatePath("/", "layout");
}

export async function isLoggedIn() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return false;
  }
  return true;
}

export async function getUserInfoFromUserEmail() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return null;
  }
  return (await getUserInfoByEmail(data.user.email || "")) || null;
}
