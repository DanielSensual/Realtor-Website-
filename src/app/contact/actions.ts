"use server";

import { checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, isValidEmail, normalizeEmail, normalizeText } from "@/lib/form-utils";

export async function submitContact(formData: FormData): Promise<void> {
  const name = normalizeText(formData.get("name"));
  const email = normalizeEmail(formData.get("email"));
  const message = normalizeText(formData.get("message"));
  const honeypot = normalizeText(formData.get("company"));

  // Spam honeypot check - silently reject
  if (honeypot) {
    return;
  }

  // Validation - silently reject invalid submissions
  if (!name || !email || !message) {
    return;
  }
  if (!isValidEmail(email)) {
    return;
  }

  const rate = checkRateLimit(getClientIp());
  if (!rate.allowed) {
    return;
  }

  // TODO: Add actual form submission logic (email, database, etc.)
  console.log("Contact form submitted:", { name, email, message });
}
