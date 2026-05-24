"use client";

import { useEffect } from "react";

export default function SnipcartSetup() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("snipcart")) return;

    // 1. Create the hidden div with your API key (This is the official Snipcart way!)
    const div = document.createElement("div");
    div.id = "snipcart";
    div.hidden = true;
    div.setAttribute("data-api-key","CLIENT_API_KEY_HERE");
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