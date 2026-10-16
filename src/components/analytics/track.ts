// GA4-ready contact events. Works with gtag.js (if NEXT_PUBLIC_GA_ID is set)
// and/or Google Tag Manager via window.dataLayer.
type Win = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export function trackContact(event: "phone_click" | "whatsapp_click", location: string) {
    if (typeof window === "undefined") return;
    const w = window as Win;
    const params = { contact_method: event === "phone_click" ? "phone" : "whatsapp", link_location: location, page_path: window.location.pathname };
    if (typeof w.gtag === "function") {
        w.gtag("event", event, params);
    } else {
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event, ...params });
    }
}
