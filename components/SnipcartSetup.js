"use client";

import { useEffect } from "react";

export default function SnipcartSetup() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("snipcart")) return;

    const div = document.createElement("div");
    div.id = "snipcart";
    div.hidden = true;
    div.setAttribute("data-api-key", "MGM0ZjA4M2UtMWVhZS00Yzc3LWI4MmItOGUxZDg0MWU5NTJmNjM5MTUxNzQ4NDI2MDcwOTAw");
    div.setAttribute("data-config-open_cart_on_add", "false");
    div.setAttribute("data-config-product_validation_enabled", "false");
    
    // SET CURRENCY TO EGYPTIAN POUND
    div.setAttribute("data-config-currency", "EGP");
    
    document.body.appendChild(div);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}