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
    
    // DON'T auto-open cart when item is added
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

    // 4. Inject custom CSS to fix small items in checkout
    const style = document.createElement("style");
    style.id = "snipcart-custom-styles";
    style.textContent = `
      /* Make cart items BIGGER and clearer */
      .snipcart-item-line {
        padding: 20px 0 !important;
        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
      }
      .snipcart-item-line__container {
        gap: 16px !important;
      }
      .snipcart-item-line__image {
        width: 90px !important;
        height: 90px !important;
        border-radius: 12px !important;
      }
      .snipcart-item-line__title {
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #FFFFFF !important;
      }
      .snipcart-item-line__description {
        font-size: 13px !important;
        color: #888888 !important;
      }
      .snipcart-item-line__price {
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #39FF14 !important;
      }
      .snipcart-item-quantity {
        font-size: 14px !important;
      }

      /* Cart header styling */
      .snipcart-cart-header__title {
        font-size: 24px !important;
        font-weight: 800 !important;
      }

      /* Checkout button */
      .snipcart-cart-header__close-button,
      .snipcart__font--xlarge {
        font-size: 20px !important;
      }

      /* Make the cart drawer wider on desktop */
      @media (min-width: 768px) {
        .snipcart-modal {
          max-width: 520px !important;
        }
      }

      /* Price summary bigger */
      .snipcart-summary-fees__item,
      .snipcart-summary-fees__total-price {
        font-size: 16px !important;
      }

      /* Quantity buttons bigger */
      .snipcart-item-quantity__btn {
        width: 36px !important;
        height: 36px !important;
        font-size: 18px !important;
      }

      /* Remove button clearer */
      .snipcart-item-line__remove {
        font-size: 13px !important;
        opacity: 0.7 !important;
      }
      .snipcart-item-line__remove:hover {
        opacity: 1 !important;
        color: #FF3366 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}