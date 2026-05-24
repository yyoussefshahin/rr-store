"use client";

import { useEffect } from "react";

export default function SnipcartSetup() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("snipcart")) return;

    // 1. Create the hidden div with config
    const div = document.createElement("div");
    div.id = "snipcart";
    div.hidden = true;
    div.setAttribute("data-api-key", "PASTE_YOUR_REAL_API_KEY_HERE"); // ← YOUR KEY
    
    // Don't auto-open cart when item is added
    div.setAttribute("data-config-open_cart_on_add", "false");
    
    // Continue Shopping goes to homepage
    div.setAttribute("data-config-continue_shopping_url", "/");
    
    document.body.appendChild(div);

    // 2. Load the CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css";
    document.head.appendChild(link);

    // 3. Load the JS
    const script = document.createElement("script");
    script.src = "https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}