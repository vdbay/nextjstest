import {
  type EmailOtpType,
  type VerifyTokenHashParams,
} from "@supabase/supabase-js";
import { type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ActionEnum } from "@/lib/validators/auth";
import { verifySignature } from "@/lib/auth";
import { registerUserInfo } from "@/services/userinfo-service";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // required
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const action = searchParams.get("action") as ActionEnum | null;
  const signature = searchParams.get("signature") ?? null;
  const next = searchParams.get("next") ?? "/";
  const timestamp = searchParams.get("timestamp") ?? null;
  const email = searchParams.get("email") ?? null;

  if (
    !token_hash ||
    !type ||
    !action ||
    !signature ||
    !next ||
    !timestamp ||
    !email ||
    !verifySignature(type, action, next, signature, timestamp)
  ) {
    console.log("Invalid request parameters or signature verification failed.");
    return redirect("/error");
  }

  switch (action) {
    case ActionEnum.Register:
      const username = searchParams.get("username") ?? null;
      if (!username) {
        console.log("Username is required for registration.");
        return redirect("/error");
      }
      return register(token_hash, type, next, email, username);

    case ActionEnum.Login:
      return login(token_hash, type, next);

    default:
      console.log("Invalid action type.");
      return redirect("/error");
  }
}

async function register(
  token_hash: string,
  type: EmailOtpType,
  next: string,
  email: string,
  username: string
) {
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    token_hash: token_hash,
    type: type,
  });
  if (error) {
    console.log("Error during registration:", error.message);
    return redirect("/error");
  }
  const resp = await registerUserInfo(email, username);
  if (!resp.data) {
    console.log("Failed to register user info:", resp.message);
    return redirect("/error");
  }
  return redirect(next);
}

async function login(token_hash: string, type: EmailOtpType, next: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    token_hash: token_hash,
    type: type,
  });
  if (error) {
    console.log("Error during login:", error.message);
    return redirect("/error");
  }
  return redirect(next);
}
