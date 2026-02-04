"use server";

import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";
import { idxProvider } from "@/lib/idx/provider";

export async function requestShowing(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const message = String(formData.get("message") ?? "");
  const listingId = String(formData.get("listingId") ?? "");
  const honeypot = String(formData.get("company") ?? "");

  if (honeypot) {
    return { ok: false, error: "Spam detected." };
  }

  if (!name || !email) {
    return { ok: false, error: "Name and email are required." };
  }

  const ip = headers().get("x-forwarded-for") ?? "unknown";
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return { ok: false, error: "Too many requests. Try again shortly." };
  }

  await idxProvider.leadCapture({ listingId, name, email, phone, message });
  return { ok: true };
}
