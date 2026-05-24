"use client";

import { useEffect } from "react";

export default function SnipcartSetup() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("snipcart")) return;

    // 1. Create the hidden div with config settings
    const div = document.createElement("div");
    div.id = "snipcart";
    div.hidden = true;
    div.setAttribute("data-api-key", "MGM0ZjA4M2UtMWVhZS00Yzc3LWI4MmItOGUxZDg0MWU5NTJmNjM5MTUxNzQ4NDI2MDcwOTAw"); // ← YOUR KEY HERE
    
    // FIX: Don't auto-open cart when item is added
    div.setAttribute("data-config-open_cart_on_add", "false");
    
    // FIX: Continue Shopping button goes to homepage
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