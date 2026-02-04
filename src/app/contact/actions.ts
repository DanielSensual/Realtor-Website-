"use server";

import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
  const honeypot = String(formData.get("company") ?? "");

  if (honeypot) {
    return { ok: false, error: "Spam detected." };
  }

  if (!name || !email || !message) {
    return { ok: false, error: "All fields are required." };
  }

  const ip = headers().get("x-forwarded-for") ?? "unknown";
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return { ok: false, error: "Too many requests. Try again shortly." };
  }

  return { ok: true };
}
