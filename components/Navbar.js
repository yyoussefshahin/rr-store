"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      try {
        if (window.Snipcart) {
          const count = window.Snipcart.store.getState().cart.items.count;
          setCartCount(count || 0);
        }
      } catch (e) {}
    };

    const checkReady = setInterval(() => {
      if (window.Snipcart) {
        clearInterval(checkReady);
        updateCount();
        window.Snipcart.events.on('item.added', updateCount);
        window.Snipcart.events.on('item.removed', updateCount);
        window.Snipcart.events.on('cart.opened', updateCount);
        window.Snipcart.events.on('cart.closed', updateCount);
      }
    }, 500);

    return () => clearInterval(checkReady);
  }, []);

  // Close menu when route changes
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-lg border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-3xl tracking-wider text-neon animate-pulse-neon">
            OS
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#drops" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Drops</a>
            <a href="/shop" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Shop</a>
            <a href="/#culture" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Culture</a>
            <a href="/#lookbook" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Lookbook</a>
            <a href="/contact" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Contact</a>
            
            {/* Cart Button */}
            <button className="snipcart-checkout relative w-9 h-9 rounded-full border border-ash text-smoke hover:border-neon hover:text-neon transition-all flex items-center justify-center" style={{position:'relative',width:'36px',height:'36px',bottom:'auto',right:'auto',boxShadow:'none',background:'transparent'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-neon text-void text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button className="snipcart-checkout relative w-8 h-8 rounded-full border border-ash text-smoke hover:border-neon transition-all flex items-center justify-center" style={{position:'relative',width:'32px',height:'32px',bottom:'auto',right:'auto',boxShadow:'none',background:'transparent'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-neon text-void text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ====== MOBILE MENU ====== */}
      <div className={`fixed inset-0 z-40 bg-void/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <a href="/#drops" onClick={handleLinkClick} className="font-display text-4xl tracking-[0.1em] text-white hover:text-neon transition-colors">DROPS</a>
        <a href="/shop" onClick={handleLinkClick} className="font-display text-4xl tracking-[0.1em] text-white hover:text-neon transition-colors">SHOP</a>
        <a href="/#culture" onClick={handleLinkClick} className="font-display text-4xl tracking-[0.1em] text-white hover:text-neon transition-colors">CULTURE</a>
        <a href="/#lookbook" onClick={handleLinkClick} className="font-display text-4xl tracking-[0.1em] text-white hover:text-neon transition-colors">LOOKBOOK</a>
        <a href="/contact" onClick={handleLinkClick} className="font-display text-4xl tracking-[0.1em] text-white hover:text-neon transition-colors">CONTACT</a>
        
        <div className="mt-8 flex items-center gap-2 text-smoke text-xs tracking-wide">
          <span>🇪🇬</span>
          <span>Local Streetwear</span>
        </div>
      </div>
    </>
  );
}