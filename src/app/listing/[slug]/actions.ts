"use server";

import { checkRateLimit } from "@/lib/rate-limit";
import { idxProvider } from "@/lib/idx/provider";
import { getClientIp, isValidEmail, normalizeEmail, normalizeText } from "@/lib/form-utils";

export async function requestShowing(formData: FormData) {
  const name = normalizeText(formData.get("name"));
  const email = normalizeEmail(formData.get("email"));
  const phone = normalizeText(formData.get("phone"));
  const message = normalizeText(formData.get("message"));
  const listingId = normalizeText(formData.get("listingId"));
  const honeypot = normalizeText(formData.get("company"));

  if (honeypot) {
    return { ok: false, error: "Spam detected." };
  }

  if (!name || !email) {
    return { ok: false, error: "Name and email are required." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  const rate = checkRateLimit(getClientIp());
  if (!rate.allowed) {
    return { ok: false, error: "Too many requests. Try again shortly." };
  }

  await idxProvider.leadCapture({ listingId, name, email, phone, message });
  return { ok: true };
}
