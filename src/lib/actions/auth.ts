"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";
import { LoginType } from "@/lib/validators/login";
import { RegisterType } from "../validators/register";

export async function login(formData: LoginType) {
  const emailRedirectTo =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : process.env.NEXT_PUBLIC_SITE_URL;

  const supabase = await createClient();

  const { data: dataUser, error } = await supabase.auth.signInWithOtp({
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

export async function register(formData: RegisterType) {
  const emailRedirectTo =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : process.env.NEXT_PUBLIC_SITE_URL;

  const supabase = await createClient();

  const { data: dataUser, error } = await supabase.auth.signInWithOtp({
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

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  revalidatePath("/", "layout");
}

export async function checkLoggedIn() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return false;
  }
  return true;
}
