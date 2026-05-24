"use client";

import { useEffect } from "react";

export default function SnipcartSetup() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("snipcart")) return;

    // Create Snipcart config div
    const div = document.createElement("div");
    div.id = "snipcart";
    div.hidden = true;
    div.setAttribute("data-api-key", "MGM0ZjA4M2UtMWVhZS00Yzc3LWI4MmItOGUxZDg0MWU5NTJmNjM5MTUxNzQ4NDI2MDcwOTAw");
    div.setAttribute("data-config-open_cart_on_add", "false");
    div.setAttribute("data-config-continue_shopping_url", "https://rr-store-kappa.vercel.app");
    document.body.appendChild(div);

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css";
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement("script");
    script.src = "https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js";
    script.async = true;
    script.onload = () => {
      // Wait for Snipcart to be fully ready
      const waitForSnipcart = setInterval(() => {
        if (window.Snipcart && window.Snipcart.api) {
          clearInterval(waitForSnipcart);

          // FORCE close cart if it tries to auto-open on add
          window.Snipcart.events.on("item.added", () => {
            window.Snipcart.api.cart.close();
          });
        }
      }, 200);
    };
    document.body.appendChild(script);
  }, []);

  return null;
}