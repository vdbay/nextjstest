import { EmailOtpType } from "@supabase/supabase-js";
import { ActionEnum } from "./validators/auth";
import { generateHmac } from "./hmac";

const SIGNATURE_TTL_MS = 5 * 60 * 1000; // 5 menit

export function generateRedirectUrl(
  type: EmailOtpType | "email",
  action: ActionEnum,
  next: string,
  timestamp: string,
  username?: string
): string {
  const emailRedirectTo =
    process.env.EMAIL_REDIRECT_TO ?? "http://localhost:3000";

  const processedSignature = generateProcessedSignature(
    type,
    action,
    next,
    timestamp
  );

  const params = new URLSearchParams({
    type: type,
    action: action,
    next: next,
    timestamp: timestamp,
    signature: processedSignature,
    username: username || "",
  });

  return `${emailRedirectTo}/auth/callback?${params.toString()}`;
}

export function generateProcessedSignature(
  type: EmailOtpType | "email",
  action: ActionEnum,
  next: string,
  timestamp: string
): string {
  return generateHmac(JSON.stringify({ type, action, next, timestamp }));
}

export function verifySignature(
  type: EmailOtpType | "email",
  action: ActionEnum,
  next: string,
  signature: string,
  timestamp: string
): boolean {
  const now = Date.now();
  const ts = parseInt(timestamp, 10);

  const isExpired = now - ts > SIGNATURE_TTL_MS;
  if (isExpired) return false;

  const expectedSig = generateProcessedSignature(type, action, next, timestamp);
  return expectedSig === signature;
}
