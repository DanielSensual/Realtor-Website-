"use server";

import { checkRateLimit } from "@/lib/rate-limit";
import { idxProvider } from "@/lib/idx/provider";
import { getClientIp, isValidEmail, normalizeEmail, normalizeText } from "@/lib/form-utils";

export async function requestShowing(formData: FormData): Promise<void> {
  const name = normalizeText(formData.get("name"));
  const email = normalizeEmail(formData.get("email"));
  const phone = normalizeText(formData.get("phone"));
  const message = normalizeText(formData.get("message"));
  const listingId = normalizeText(formData.get("listingId"));
  const honeypot = normalizeText(formData.get("company"));

  // Spam honeypot check
  if (honeypot) {
    return;
  }

  // Validation
  if (!name || !email) {
    return;
  }
  if (!isValidEmail(email)) {
    return;
  }

  const rate = checkRateLimit(getClientIp());
  if (!rate.allowed) {
    return;
  }

  await idxProvider.leadCapture({ listingId, name, email, phone, message });
}
