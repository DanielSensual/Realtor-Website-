const windowMs = 60_000;
const maxRequests = 8;
const requestLog = new Map<string, number[]>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const windowStart = now - windowMs;
  const timestamps = requestLog.get(key) ?? [];
  const recent = timestamps.filter((ts) => ts > windowStart);
  if (recent.length >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }
  recent.push(now);
  requestLog.set(key, recent);
  return { allowed: true, remaining: maxRequests - recent.length };
}
