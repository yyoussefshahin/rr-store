"use client";

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import { products as localProducts } from '../data/products';

export default function Home() {
  const [products, setProducts] = useState(localProducts);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data && data.length > 0) {
        setProducts(data);
      }
    } catch (e) {
      console.log('Using local products (Supabase not connected yet)');
    }
  }

  return (
    <main>
      <Navbar />

      {/* ====== VIDEO HERO ====== */}
      <section className="relative h-screen overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://picsum.photos/seed/seirra-hero/1920/1080.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-woman-walking-on-the-beach-1573/1080p.mp4" type="video/mp4"/>
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-16">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-white/40"></div>
              <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-white/70">New In</span>
              <div className="w-6 h-px bg-white/40"></div>
            </div>
            <span className="hero-tag inline-block px-6 py-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-white rounded-full mb-8">
              Summer 2026 Collection
            </span>
          </div>
          <h1 className="animate-fade-in fade-delay-1">
            <span className="font-display block text-[60px] md:text-[100px] lg:text-[130px] leading-[0.85] tracking-[0.04em] text-white">SUMMER</span>
            <span className="font-display block text-[60px] md:text-[100px] lg:text-[130px] leading-[0.85] tracking-[0.04em] text-white/60">COLLECTION</span>
          </h1>
          <div className="animate-fade-in fade-delay-2 mt-8 flex items-center gap-4">
            <a href="/shop" className="px-8 py-3.5 bg-white text-seirra-black text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-seirra-black hover:text-white transition-all duration-300">
              Shop Now
            </a>
            <a href="#collection" className="px-8 py-3.5 border border-white/30 text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-seirra-black transition-all duration-300">
              Explore
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/30 font-medium">Scroll</span>
          <div className="w-px h-6 bg-white/20 relative overflow-hidden">
            <div className="w-full h-2 bg-white/50" style={{animation: 'scrollDown 2s ease-in-out infinite'}}></div>
          </div>
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <section className="bg-seirra-black py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/50">SEIRRA</span>
              <span className="text-white/20">✦</span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/50">Contemporary Fashion</span>
              <span className="text-white/20">✦</span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/50">Summer 2026</span>
              <span className="text-white/20">✦</span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/50">Made in Egypt</span>
              <span className="text-white/20">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ====== NEW IN ====== */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-seirra-black"></div>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-seirra-gray">Just Dropped</span>
            </div>
            <a href="/shop" className="group flex items-center gap-2 text-[10px] font-medium tracking-[0.15em] uppercase text-seirra-gray hover:text-seirra-black transition-colors">
              Shop All
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
          <h2 className="newin-title font-display text-[70px] md:text-[110px] lg:text-[140px] leading-[0.85] tracking-[0.02em] text-seirra-black">
            NEW <span className="font-light">IN</span>
          </h2>
          <div className="mt-4 mb-12 h-[2px] bg-seirra-light overflow-hidden">
            <div className="animate-newin-line h-full bg-seirra-black w-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {products.slice(0, 4).map((p, i) => (
              <div key={p.id} className={`animate-newin-card newin-delay-${i+1} group cursor-pointer`}>
                <div className="relative overflow-hidden aspect-[3/4] bg-seirra-light">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                  {p.tag && (
                    <div className="absolute top-3 left-3">
                      <span className={`animate-newin-badge tag-${p.tag_class || p.tagClass} px-3 py-1 text-[8px] font-bold tracking-[0.2em] uppercase inline-block`}>{p.tag}</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      className="snipcart-add-item w-full py-2.5 bg-seirra-black/90 backdrop-blur-sm text-white text-[9px] font-medium tracking-[0.12em] uppercase hover:bg-seirra-black transition-all"
                      data-item-id={p.id}
                      data-item-price={p.price}
                      data-item-url="https://rr-store-kappa.vercel.app/shop"
                      data-item-description={p.description || p.desc}
                      data-item-image={p.image}
                      data-item-name={`${p.name} — ${p.description || p.desc}`}
                      data-item-custom1-name="Size"
                      data-item-custom1-value="M"
                      data-item-custom1-options="S|M|L|XL"
                    >+ Quick Add</button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-[13px] font-medium text-seirra-black tracking-wide">{p.name}</h3>
                  <p className="text-[10px] text-seirra-gray mt-0.5">{p.description || p.desc}</p>
                  <span className="text-[13px] font-semibold text-seirra-black block mt-1">EGP {p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURED COLLECTION ====== */}
      <section id="collection" className="py-16 md:py-24 bg-seirra-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-seirra-gray">New Arrivals</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-light tracking-[0.04em] text-seirra-black">SUMMER <span className="font-bold">2026</span></h2>
            </div>
            <a href="/shop" className="group flex items-center gap-2 text-[10px] font-medium tracking-[0.15em] uppercase text-seirra-gray hover:text-seirra-black transition-colors">
              View All
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== CATEGORIES ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/shop?cat=women" className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
              <img src="https://picsum.photos/seed/seirra-women/800/1000.jpg" alt="Women" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-white">WO<span className="font-bold">MEN</span></h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 mt-2 block">Shop Collection →</span>
              </div>
            </a>
            <a href="/shop?cat=men" className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
              <img src="https://picsum.photos/seed/seirra-men/800/1000.jpg" alt="Men" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-white">M<span className="font-bold">EN</span></h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 mt-2 block">Shop Collection →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ====== BRAND STORY ====== */}
      <section className="py-16 md:py-24 bg-seirra-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="brand-name text-lg tracking-[0.3em] text-seirra-gray"><span className="bold">SEI</span><span className="light">RRA</span></span>
          <h2 className="mt-6 text-2xl md:text-4xl font-light tracking-[0.02em] text-seirra-black leading-snug">Fashion that speaks <span className="font-bold">volume</span> without saying a word.</h2>
          <p className="mt-6 text-sm text-seirra-gray leading-relaxed max-w-lg mx-auto">SEIRRA is a contemporary fashion brand born from the streets of Egypt. We design for the bold, the confident, and the unapologetically stylish.</p>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="py-16 md:py-20 bg-seirra-black">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.04em] text-white">JOIN THE <span className="font-bold">MOVEMENT</span></h2>
          <p className="mt-2 text-xs text-white/40">Be first to know about new drops & exclusive offers.</p>
          <form className="mt-6 flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Welcome to SEIRRA!'); }}>
            <input type="email" placeholder="Your email" required className="flex-1 px-4 py-3 bg-white/10 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"/>
            <button type="submit" className="px-6 py-3 bg-white text-seirra-black text-[10px] font-semibold tracking-[0.12em] uppercase hover:bg-white/80 transition-all">Join</button>
          </form>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-seirra-dark py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="brand-name text-2xl tracking-[0.25em] text-white"><span className="bold">SEI</span><span className="light">RRA</span></span>
              <p className="mt-2 text-[10px] text-white/30 tracking-wide">Contemporary Fashion — Made in Egypt 🇪🇬</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">Home</a>
              <a href="/shop" className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">Shop</a>
              <a href="/contact" className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/30 hover:text-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-[9px] text-white/20 tracking-wide">© 2026 SEIRRA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}