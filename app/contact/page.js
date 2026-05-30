"use client";
import Navbar from '../../components/Navbar';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-seirra-gray text-[10px] font-medium tracking-wide hover:text-seirra-black transition-colors mb-6">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </a>
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.04em] text-seirra-black">
          CONTACT <span className="font-bold">US</span>
        </h1>
        <p className="mt-4 text-sm text-seirra-gray">Get in touch with SEIRRA.</p>
        <div className="mt-16 p-12 border border-seirra-light text-center">
          <span className="text-3xl">📬</span>
          <p className="mt-4 text-seirra-gray text-sm">Contact form coming soon.</p>
        </div>
      </div>
    </main>
  );
}