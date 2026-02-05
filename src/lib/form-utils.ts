import { headers } from "next/headers";

export function normalizeText(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export function normalizeEmail(value: FormDataEntryValue | null) {
  return normalizeText(value).toLowerCase();
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getClientIp() {
  const forwarded = headers().get("x-forwarded-for") ?? "";
  const first = forwarded.split(",")[0]?.trim();
  return first || headers().get("x-real-ip") || "unknown";
}
