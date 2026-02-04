export type AnalyticsEvent =
  | "property_inquiry"
  | "schedule_showing"
  | "save_favorite"
  | "save_search"
  | "click_to_call";

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag("event", event, payload ?? {});
  }
  const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (fbq) {
    fbq("trackCustom", event, payload ?? {});
  }
}
