"use client";

export default function Home() {

  const handleSizeSelect = (e, productId, size) => {
    const btn = document.querySelector(`.snipcart-add-item[data-item-id="${productId}"]`);
    if (btn) btn.setAttribute('data-item-custom1-value', size);
    
    const parent = e.target.parentElement;
    parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  };

  return (
    <main>
      {/* ====== HERO ====== */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/summerpool2025/1920/1080.jpg" 
            alt="Summer poolside" 
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-stone-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-transparent to-transparent"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 md:px-16">
          <div className="animate-cinematic mb-6">
            <span className="inline-block px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] uppercase text-summer-400 border border-summer-400/30 rounded-full backdrop-blur-sm bg-white/5">
              Summer 2025 Editorial
            </span>
          </div>
          <h1 className="font-display text-white">
            <span className="animate-cinematic block text-[56px] md:text-[96px] lg:text-[120px] leading-[0.85] tracking-[0.04em]">ENDLESS</span>
            <span className="animate-cinematic anim-delay-300 block text-[56px] md:text-[96px] lg:text-[120px] leading-[0.85] tracking-[0.04em]">SUMMER<span className="text-summer-400">.</span></span>
          </h1>
          <p className="animate-cinematic anim-delay-600 mt-6 max-w-lg text-sm md:text-base font-light text-white/60 leading-relaxed tracking-wide">
            Oversized silhouettes meet the warm breeze.<br/>
            The RR capsule — where comfort becomes statement.
          </p>
          <div className="animate-cinematic anim-delay-900 mt-10 flex items-center gap-4">
            <a href="#product" className="group flex items-center gap-3 px-7 py-3.5 bg-white text-stone-900 text-xs font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-sand-200 transition-all duration-300 shadow-lg">
              Shop Now
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-medium">Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <div className="w-full h-3 bg-white/60" style={{animation: 'scrollDown 2s ease-in-out infinite'}}></div>
          </div>
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <section className="bg-stone-900 py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {['Oversized Tee', '✦', 'Black Sweatpants', '✦', 'Summer Vibes', '✦', 'Camo Collection', '✦', 'Poolside Edit', '✦', 'Oversized Tee', '✦', 'Black Sweatpants', '✦', 'Summer Vibes', '✦', 'Camo Collection', '✦', 'Poolside Edit'].map((item, i) => (
            <span key={i} className={`inline-block px-8 text-xs tracking-[0.3em] uppercase ${item === '✦' ? 'text-summer-400/40 px-4' : 'text-white/20 font-medium'}`}>{item}</span>
          ))}
        </div>
      </section>

      {/* ====== PRODUCTS ====== */}
      <section id="product" className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-sand-500">The Collection</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-[0.04em] text-stone-900">RR CAPSULE<span className="text-summer-500">.</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Product 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[3/4]">
              <img src="https://z-cdn-media.chatglm.cn/files/9446e316-3b74-4f8c-8cdc-caedb0c45d96.jpg?auth_key=1879577283-aa75d122126e48e7bcd3876e799228d5-0-947f230765126ba6b480c89a478d5fd9" alt="RR Tee Front" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[9px] font-semibold tracking-[0.2em] uppercase bg-summer-500 text-white rounded-full">New</span>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-stone-600">Front View</span>
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg tracking-[0.06em] text-stone-900">RR Oversized Tee</h3>
                <p className="mt-1 text-xs text-stone-400 tracking-wide">Camo Front Print — White</p>
              </div>
              <span className="font-display text-lg tracking-wide text-stone-900">$89</span>
            </div>
            <div className="mt-4 p-4 bg-white rounded-xl border border-sand-200">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">Select Size</p>
              <div className="flex items-center gap-2 mb-4">
                <button className="size-btn" onClick={(e) => handleSizeSelect(e, 'rr-tee-front', 'S')}>S</button>
                <button className="size-btn active" onClick={(e) => handleSizeSelect(e, 'rr-tee-front', 'M')}>M</button>
                <button className="size-btn" onClick={(e) => handleSizeSelect(e, 'rr-tee-front', 'L')}>L</button>
                <button className="size-btn" onClick={(e) => handleSizeSelect(e, 'rr-tee-front', 'XL')}>XL</button>
              </div>
              <button className="snipcart-add-item w-full py-3.5 bg-stone-900 text-white text-xs font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-stone-700 transition-all shadow-lg shadow-stone-900/20 flex items-center justify-center gap-2"
                data-item-id="rr-tee-front"
                data-item-price="89.00"
                data-item-url="/"
                data-item-description="Oversized tee with camo front print"
                data-item-image="https://z-cdn-media.chatglm.cn/files/9446e316-3b74-4f8c-8cdc-caedb0c45d96.jpg"
                data-item-name="RR Oversized Tee — Front Print"
                data-item-custom1-name="Size"
                data-item-custom1-value="M"
                data-item-custom1-options="S|M|L|XL">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Add to Cart — $89
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[3/4]">
              <img src="https://z-cdn-media.chatglm.cn/files/ac3ac6e5-b648-4d93-8e47-308c2287c6ec.jpeg?auth_key=1879577283-37c0e4aaa87e41e781dd5b32cfcfc81d-0-eeeee7f5c3c317b619398b9a6d93b62a" alt="RR Tee Back" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[9px] font-semibold tracking-[0.2em] uppercase bg-stone-900 text-white rounded-full">Signature</span>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-stone-600">Back View</span>
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg tracking-[0.06em] text-stone-900">RR Oversized Tee</h3>
                <p className="mt-1 text-xs text-stone-400 tracking-wide">Oval Camo &quot;RR&quot; — White</p>
              </div>
              <span className="font-display text-lg tracking-wide text-stone-900">$89</span>
            </div>
            <div className="mt-4 p-4 bg-white rounded-xl border border-sand-200">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">Select Size</p>
              <div className="flex items-center gap-2 mb-4">
                <button className="size-btn" onClick={(e) => handleSizeSelect(e, 'rr-tee-back', 'S')}>S</button>
                <button className="size-btn active" onClick={(e) => handleSizeSelect(e, 'rr-tee-back', 'M')}>M</button>
                <button className="size-btn" onClick={(e) => handleSizeSelect(e, 'rr-tee-back', 'L')}>L</button>
                <button className="size-btn" onClick={(e) => handleSizeSelect(e, 'rr-tee-back', 'XL')}>XL</button>
              </div>
              <button className="snipcart-add-item w-full py-3.5 bg-stone-900 text-white text-xs font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-stone-700 transition-all shadow-lg shadow-stone-900/20 flex items-center justify-center gap-2"
                data-item-id="rr-tee-back"
                data-item-price="89.00"
                data-item-url="/"
                data-item-description="Oversized tee with oval camo RR back print"
                data-item-image="https://z-cdn-media.chatglm.cn/files/ac3ac6e5-b648-4d93-8e47-308c2287c6ec.jpeg"
                data-item-name="RR Oversized Tee — Back Print"
                data-item-custom1-name="Size"
                data-item-custom1-value="M"
                data-item-custom1-options="S|M|L|XL">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Add to Cart — $89
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== DETAILS ====== */}
      <section id="details" className="py-24 md:py-32 bg-stone-900 overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(255,192,76,0.4) 0%, transparent 70%)'}}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden bg-stone-800 aspect-[4/5]">
                  <img src="https://picsum.photos/seed/tee-detail1/600/750.jpg" alt="Detail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"/>
                </div>
                <div className="rounded-2xl bg-stone-800 aspect-square p-6 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-5xl text-summer-400">280</span>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-2">GSM Premium Cotton</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-stone-800 aspect-square p-6 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-sand-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-3">Breathable Weave</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-stone-800 aspect-[4/5]">
                  <img src="https://picsum.photos/seed/tee-detail2/600/750.jpg" alt="Detail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"/>
                </div>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-summer-400">Craftsmanship</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-[0.04em] text-white leading-tight">THE DETAIL<br/>IS THE DESIGN<span className="text-summer-400">.</span></h2>
              <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-md">Every RR piece begins with the fabric — 280gsm heavyweight cotton that drapes with intention.</p>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-sand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white tracking-wide">Oversized Relaxed Fit</h4>
                    <p className="mt-1 text-xs text-white/35 leading-relaxed">Drop-shoulder construction with extended body length.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-sand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white tracking-wide">Signature Camo Graphics</h4>
                    <p className="mt-1 text-xs text-white/35 leading-relaxed">Front: triple emblem. Back: oval camo with green RR.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-display text-2xl text-summer-400">100%</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mt-1">Cotton</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-display text-2xl text-summer-400">OS</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mt-1">Fit</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-display text-2xl text-summer-400">UNI</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mt-1">Gender</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LOOKBOOK ====== */}
      <section id="lookbook" className="py-24 md:py-32 bg-sand-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-sand-500">Summer 2025</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-[0.04em] text-stone-900">LOOKBOOK<span className="text-summer-500">.</span></h2>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory px-6 md:px-12">
          {[
            { src: 'poolside-look1', title: 'Look 01 — Poolside Morning', desc: 'RR Tee + Black Sweatpants' },
            { src: 'beach-walk2', title: 'Look 02 — Golden Hour Walk', desc: 'RR Tee + Linen Shorts' },
            { src: 'summer-vibe3', title: 'Look 03 — Terrace Cool', desc: 'RR Tee Layered' },
            { src: 'sunset-edit4', title: 'Look 04 — Sunset Ritual', desc: 'Full RR Capsule' },
            { src: 'summer-coast5', title: 'Look 05 — Coastal Ease', desc: 'RR Tee + Sweatpants' },
          ].map((look, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[340px] snap-start group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-stone-200">
                <img src={`https://picsum.photos/seed/${look.src}/680/900.jpg`} alt={look.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-xs font-medium tracking-[0.1em]">{look.title}</p>
                </div>
              </div>
              <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">{look.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== QUOTE ====== */}
      <section className="py-20 md:py-28 overflow-hidden relative">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/golden-hour-pool/1920/800.jpg" alt="Golden hour" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <svg className="w-7 h-7 text-summer-400/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>
          <blockquote className="mt-8 font-editorial text-2xl md:text-4xl text-white/90 leading-snug italic">
            &quot;The best summers are the ones where you forget what day it is.&quot;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-summer-400/40"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-summer-400/60 font-medium">RR Manifesto</span>
            <div className="w-8 h-px bg-summer-400/40"></div>
          </div>
        </div>
      </section>

      {/* ====== COMPLETE THE LOOK ====== */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-sand-500">Styling</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[0.04em] text-stone-900 mb-12">COMPLETE THE LOOK<span className="text-summer-500">.</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Black Sweatpants', desc: 'Tapered fit · 340gsm', price: '$109', seed: 'black-sweatpants' },
              { name: 'RR Bucket Hat', desc: 'Reversible · Washed canvas', price: '$59', seed: 'bucket-hat-rr' },
              { name: 'Pool Slides', desc: 'Molded footbed · RR embossed', price: '$49', seed: 'slides-rr' },
              { name: 'Canvas Tote', desc: 'Heavyweight · Camo print', price: '$45', seed: 'tote-bag-rr' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl bg-white border border-sand-200 aspect-square p-4 md:p-8 flex items-center justify-center group-hover:border-sand-400 transition-colors">
                  <img src={`https://picsum.photos/seed/${item.seed}/400/400.jpg`} alt={item.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <h4 className="mt-3 font-display text-sm tracking-[0.06em] text-stone-900">{item.name}</h4>
                <p className="text-[10px] md:text-xs text-stone-400 mt-0.5">{item.desc}</p>
                <span className="font-display text-sm text-stone-900 mt-1 block">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="py-20 md:py-24 bg-stone-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-summer-400">Stay in the Loop</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-[0.04em] text-white">GET EARLY ACCESS<span className="text-summer-400">.</span></h2>
          <p className="mt-3 text-sm text-white/40">Be first to know about new drops and exclusive colorways.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Welcome to the RR family!'); }}>
            <input type="email" placeholder="Your email address" required className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-white/30 focus:outline-none focus:border-summer-400/50 transition-colors"/>
            <button type="submit" className="px-7 py-3.5 bg-summer-500 text-stone-900 text-xs font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-summer-400 transition-all">Subscribe</button>
          </form>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-stone-950 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-display text-3xl tracking-wider text-white">RR</span>
              <p className="mt-3 text-xs text-white/30 leading-relaxed max-w-[200px]">Redefining casual luxury through bold graphics and premium comfort.</p>
            </div>
            <div>
              <h5 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">Shop</h5>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">All Products</a></li>
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">Tees</a></li>
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">Bottoms</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">Info</h5>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">About RR</a></li>
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">Legal</h5>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20 tracking-wide">© 2025 RR. All rights reserved. Designed for the endless summer.</p>
          </div>
        </div>
      </footer>

      {/* ====== FLOATING CART BUTTON ====== */}
      <button className="snipcart-checkout text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
      </button>
    </main>
  )
}