"use client";

import Script from "next/script";
import { useEffect } from "react";

const GTAG_ID = "AW-17782810421";
const CONVERSION_ID = "AW-17782810421/2ti4CJbH0o8cELXOwJ9C";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function GoogleAdsTracking() {
  useEffect(() => {
    // Listen for Cal.com booking confirmed event
    const handleCalMessage = (e: MessageEvent) => {
      if (e.data?.type === "CAL:booking_successful" || e.data?.type === "booking_successful") {
        // Fire Google Ads conversion
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: CONVERSION_ID,
            value: 50.0,
            currency: "USD",
          });
          console.log("[GoogleAds] Conversion fired: Agenda Confirmada");
        }
      }
    };

    window.addEventListener("message", handleCalMessage);
    return () => window.removeEventListener("message", handleCalMessage);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
    </>
  );
}
