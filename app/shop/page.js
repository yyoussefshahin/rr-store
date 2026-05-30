"use client";

import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';
import Navbar from '../../components/Navbar';

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-seirra-gray text-[10px] font-medium tracking-wide hover:text-seirra-black transition-colors mb-6">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </a>
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.04em] text-seirra-black">
          THE <span className="font-bold">SHOP</span>
        </h1>
        <p className="mt-2 text-xs text-seirra-gray">All SEIRRA products. Free shipping on orders over EGP 1000. 🇪🇬</p>
      </div>

      {/* Filter Tags */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="px-4 py-1.5 bg-seirra-black text-white text-[10px] font-medium tracking-[0.12em] uppercase">All</button>
          <button className="px-4 py-1.5 bg-white border border-seirra-light text-seirra-gray text-[10px] font-medium tracking-[0.12em] uppercase hover:border-seirra-black hover:text-seirra-black transition-all">Women</button>
          <button className="px-4 py-1.5 bg-white border border-seirra-light text-seirra-gray text-[10px] font-medium tracking-[0.12em] uppercase hover:border-seirra-black hover:text-seirra-black transition-all">Winter 2025</button>
          <button className="px-4 py-1.5 bg-white border border-seirra-light text-seirra-gray text-[10px] font-medium tracking-[0.12em] uppercase hover:border-seirra-black hover:text-seirra-black transition-all">Men</button>
        </div>
      </div>

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