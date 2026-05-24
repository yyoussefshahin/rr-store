"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      try {
        if (window.Snipcart) {
          const count = window.Snipcart.store.getState().cart.items.count;
          setCartCount(count || 0);
        }
      } catch (e) {}
    };

    // Keep checking until Snipcart is loaded
    const checkReady = setInterval(() => {
      if (window.Snipcart) {
        clearInterval(checkReady);
        updateCount();

        // Listen for cart changes
        window.Snipcart.events.on('item.added', updateCount);
        window.Snipcart.events.on('item.removed', updateCount);
        window.Snipcart.events.on('cart.opened', updateCount);
        window.Snipcart.events.on('cart.closed', updateCount);
      }
    }, 500);

    return () => clearInterval(checkReady);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-lg border-b border-ash/50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-display text-3xl tracking-wider text-neon animate-pulse-neon">
          OS
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="/#drops" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Drops</a>
          <a href="/shop" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Shop</a>
          <a href="/#culture" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Culture</a>
          <a href="/#lookbook" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Lookbook</a>
          
          {/* Cart Button with Count Badge */}
          <button className="snipcart-checkout relative w-9 h-9 rounded-full border border-ash text-smoke hover:border-neon hover:text-neon transition-all flex items-center justify-center" style={{position:'relative',width:'36px',height:'36px',bottom:'auto',right:'auto',boxShadow:'none',background:'transparent'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-neon text-void text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button className="snipcart-checkout relative w-8 h-8 rounded-full border border-ash text-smoke hover:border-neon transition-all flex items-center justify-center" style={{position:'relative',width:'32px',height:'32px',bottom:'auto',right:'auto',boxShadow:'none',background:'transparent'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-neon text-void text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}