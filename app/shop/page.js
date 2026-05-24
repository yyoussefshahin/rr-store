"use client";

import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';
import Navbar from '../../components/Navbar';

export default function Shop() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />

      {/* Shop Header */}
      <div className="pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-smoke text-xs font-medium tracking-wide hover:text-neon transition-colors mb-6">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </a>
        <h1 className="font-display text-5xl md:text-7xl tracking-[0.02em] text-white">
          THE SHOP<span className="text-neon">.</span>
        </h1>
        <p className="mt-3 text-sm text-smoke max-w-md">All OS products. Free shipping on orders over EGP 1000. 🇪🇬</p>
      </div>

      {/* Filter Tags */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="px-4 py-1.5 bg-neon text-void text-[10px] font-bold tracking-[0.15em] uppercase rounded-full">All</button>
          <button className="px-4 py-1.5 bg-void-light border border-ash text-smoke text-[10px] font-bold tracking-[0.15em] uppercase rounded-full hover:border-neon hover:text-neon transition-all">Tees</button>
          <button className="px-4 py-1.5 bg-void-light border border-ash text-smoke text-[10px] font-bold tracking-[0.15em] uppercase rounded-full hover:border-neon hover:text-neon transition-all">Hoodies</button>
          <button className="px-4 py-1.5 bg-void-light border border-ash text-smoke text-[10px] font-bold tracking-[0.15em] uppercase rounded-full hover:border-neon hover:text-neon transition-all">Bottoms</button>
          <button className="px-4 py-1.5 bg-void-light border border-ash text-smoke text-[10px] font-bold tracking-[0.15em] uppercase rounded-full hover:border-neon hover:text-neon transition-all">Accessories</button>
        </div>
      </div>

      {/* Product Grid — ALL products */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </main>
  );
}