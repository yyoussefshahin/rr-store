"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [snipcartReady, setSnipcartReady] = useState(false);

  // Listen for Snipcart events to update count
  useEffect(() => {
    const updateCount = () => {
      try {
        if (window.Snipcart && window.Snipcart.store) {
          const state = window.Snipcart.store.getState();
          const items = state.cart.items;
          // Count TOTAL quantity, not just unique items
          const totalQty = items.items
            ? items.items.reduce((sum, item) => sum + item.quantity, 0)
            : 0;
          setCartCount(totalQty);
        }
      } catch (e) {
        console.log("Cart update error:", e);
      }
    };

    // Keep checking until Snipcart loads
    const interval = setInterval(() => {
      if (window.Snipcart && window.Snipcart.store) {
        clearInterval(interval);
        setSnipcartReady(true);
        updateCount();

        // Listen for ALL cart events
        window.Snipcart.events.on("item.added", updateCount);
        window.Snipcart.events.on("item.removed", updateCount);
        window.Snipcart.events.on("item.updated", updateCount);
        window.Snipcart.events.on("cart.opened", updateCount);
        window.Snipcart.events.on("cart.closed", updateCount);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Open cart programmatically
  const openCart = () => {
    if (window.Snipcart && window.Snipcart.api) {
      window.Snipcart.api.cart.open();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void/90 backdrop-blur-lg border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-display text-3xl tracking-wider text-neon animate-pulse-neon">OS</a>

          <div className="flex items-center gap-3">

            {/* Cart Icon */}
            <button 
              onClick={openCart}
              className="relative w-9 h-9 rounded-full border border-ash text-smoke hover:border-neon hover:text-neon transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-neon text-void text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full border border-ash hover:border-neon transition-all">
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 z-40 bg-void transition-all duration-500 flex flex-col items-center justify-center gap-6 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[300px] md:text-[400px] text-white/[0.02] leading-none select-none pointer-events-none">OS</div>
        <a href="/#drops" onClick={() => setMenuOpen(false)} className="font-display text-5xl md:text-7xl tracking-[0.08em] text-white hover:text-neon transition-all duration-300 hover:tracking-[0.15em]">DROPS</a>
        <a href="/shop" onClick={() => setMenuOpen(false)} className="font-display text-5xl md:text-7xl tracking-[0.08em] text-white hover:text-neon transition-all duration-300 hover:tracking-[0.15em]">SHOP</a>
        <a href="/#culture" onClick={() => setMenuOpen(false)} className="font-display text-5xl md:text-7xl tracking-[0.08em] text-white hover:text-neon transition-all duration-300 hover:tracking-[0.15em]">CULTURE</a>
        <a href="/#lookbook" onClick={() => setMenuOpen(false)} className="font-display text-5xl md:text-7xl tracking-[0.08em] text-white hover:text-neon transition-all duration-300 hover:tracking-[0.15em]">LOOKBOOK</a>
        <a href="/contact" onClick={() => setMenuOpen(false)} className="font-display text-5xl md:text-7xl tracking-[0.08em] text-white hover:text-neon transition-all duration-300 hover:tracking-[0.15em]">CONTACT</a>
        <div className="absolute bottom-8 flex items-center gap-2 text-smoke/40 text-[10px] tracking-[0.2em] uppercase"><span>🇪🇬</span><span>Local Streetwear</span></div>
      </div>
    </>
  );
}