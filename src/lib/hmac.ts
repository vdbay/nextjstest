import { createHmac } from "crypto";

const secretKey = process.env.HMAC_SECRET || "fallback-dev-secret";

export function generateHmac(data: string): string {
  return createHmac("sha256", secretKey).update(data).digest("hex");
}
