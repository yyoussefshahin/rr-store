"use client";

import Navbar from '../../components/Navbar';

export default function Contact() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />

      <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-smoke text-xs font-medium tracking-wide hover:text-neon transition-colors mb-6">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </a>
        <h1 className="font-display text-5xl md:text-7xl tracking-[0.02em] text-white">
          CONTACT<span className="text-neon">.</span>
        </h1>
        <p className="mt-4 text-sm text-smoke max-w-md">
          Get in touch with OS. We&apos;ll get back to you soon.
        </p>

        {/* Blank placeholder — will add form later */}
        <div className="mt-16 p-12 border border-ash rounded-2xl text-center">
          <span className="text-4xl">📬</span>
          <p className="mt-4 text-smoke text-sm">Contact form coming soon.</p>
        </div>
      </div>

      {/* Floating Cart */}
      <button className="snipcart-checkout text-void">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
      </button>
    </main>
  );
}