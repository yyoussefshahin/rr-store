"use client";

export default function Home() {

  const handleSizeSelect = (e, productId, size) => {
    const btn = document.querySelector(`.snipcart-add-item[data-item-id="${productId}"]`);
    if (btn) btn.setAttribute('data-item-custom1-value', size);
    const parent = e.target.parentElement;
    parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  };

  const products = [
    {
      id: "os-tee-front",
      name: "OS Oversized Tee",
      desc: "Camo Front Print — White",
      price: "499.00",
      image: "https://z-cdn-media.chatglm.cn/files/9446e316-3b74-4f8c-8cdc-caedb0c45d96.jpg?auth_key=1879577283-aa75d122126e48e7bcd3876e799228d5-0-947f230765126ba6b480c89a478d5fd9",
      tag: "New",
      tagColor: "bg-neon text-void",
    },
    {
      id: "os-tee-back",
      name: "OS Oversized Tee",
      desc: "Oval Camo \"OS\" — White",
      price: "499.00",
      image: "https://z-cdn-media.chatglm.cn/files/ac3ac6e5-b648-4d93-8e47-308c2287c6ec.jpeg?auth_key=1879577283-37c0e4aaa87e41e781dd5b32cfcfc81d-0-eeeee7f5c3c317b619398b9a6d93b62a",
      tag: "Signature",
      tagColor: "bg-hot text-white",
    },
    // Add more products here easily! Just copy the object:
    {
      id: "os-tee-black",
      name: "OS Oversized Tee",
      desc: "Camo Print — Black",
      price: "549.00",
      image: "https://picsum.photos/seed/os-tee-black/600/800.jpg",
      tag: "Hot",
      tagColor: "bg-amber text-void",
    },
    {
      id: "os-hoodie",
      name: "OS Hoodie",
      desc: "Oversized — Charcoal",
      price: "899.00",
      image: "https://picsum.photos/seed/os-hoodie-charcoal/600/800.jpg",
      tag: "Soon",
      tagColor: "bg-white/10 text-white border border-white/20",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* ====== NAVBAR ====== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-lg border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-display text-3xl tracking-wider text-neon animate-pulse-neon">OS</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#drops" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Drops</a>
            <a href="#product" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Shop</a>
            <a href="#culture" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Culture</a>
            <a href="#lookbook" className="text-[10px] font-bold tracking-[0.2em] uppercase text-smoke hover:text-neon transition-colors">Lookbook</a>
            <button className="snipcart-checkout relative w-8 h-8 rounded-full border border-ash text-smoke hover:border-neon hover:text-neon transition-all flex items-center justify-center" style={{position:'relative',width:'32px',height:'32px',bottom:'auto',right:'auto',boxShadow:'none',background:'transparent'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/streetwear-urban1/1920/1080.jpg" alt="Urban backdrop" className="w-full h-full object-cover opacity-30"/>
          <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/60 to-void"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-void/70"></div>
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full border border-neon/10 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 rounded-full border border-electric/10 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 text-[200px] font-display text-white/[0.02] leading-none select-none pointer-events-none">OS</div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-neon border border-neon/30 rounded-full bg-neon/5 mb-6">
              🔥 New Drop — Summer 25
            </span>
          </div>
          <h1 className="animate-slide-up slide-delay-1">
            <span className="font-display block text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[0.02em] text-white">OWN</span>
            <span className="font-display block text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[0.02em] gradient-text">YOUR</span>
            <span className="font-display block text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[0.02em] text-white">STYLE</span>
          </h1>
          <p className="animate-slide-up slide-delay-2 mt-6 text-sm md:text-base text-smoke max-w-md mx-auto leading-relaxed">
            Local streetwear for the culture. No rules. No limits. Just OS.
          </p>
          <div className="animate-slide-up slide-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#product" className="group px-8 py-4 bg-neon text-void text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-white transition-all shadow-lg shadow-neon/20 flex items-center gap-2">
              Shop the Drop
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="#lookbook" className="px-8 py-4 bg-transparent border border-ash text-smoke text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:border-white hover:text-white transition-all">Lookbook</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] uppercase text-smoke/40 font-medium">Scroll</span>
          <div className="w-px h-8 bg-ash relative overflow-hidden">
            <div className="w-full h-3 bg-neon" style={{animation: 'scrollDown 2s ease-in-out infinite'}}></div>
          </div>
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <section className="bg-neon py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-void">OS STREETWEAR</span>
              <span className="text-void/40">★</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-void">LOCAL BRAND</span>
              <span className="text-void/40">★</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-void">MADE FOR THE STREETS</span>
              <span className="text-void/40">★</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-void">NO RULES</span>
              <span className="text-void/40">★</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-void">EGYPT 🇪🇬</span>
              <span className="text-void/40">★</span>
            </span>
          ))}
        </div>
      </section>

      {/* ====== DROPS SECTION ====== */}
      <section id="drops" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-void via-void-light to-void"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none" style={{background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)'}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neon">🔥 Latest</span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-[0.02em] text-white">NEW DROPS<span className="text-neon">.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { seed: 'streetwear-drop1', title: 'Summer Tees', tag: 'NEW' },
              { seed: 'streetwear-drop2', title: 'Oversized Collection', tag: 'HOT' },
              { seed: 'streetwear-drop3', title: 'Accessories', tag: 'SOON' },
            ].map((drop, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                <img src={`https://picsum.photos/seed/${drop.seed}/600/800.jpg`} alt={drop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full ${drop.tag === 'NEW' ? 'bg-neon text-void' : drop.tag === 'HOT' ? 'bg-hot text-white' : 'bg-white/10 text-white border border-white/20'}`}>{drop.tag}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl tracking-[0.04em] text-white">{drop.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-smoke text-xs font-medium tracking-wide group-hover:text-neon transition-colors">
                    <span>Shop Now</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRODUCTS (COMPACT & TRANSPARENT) ====== */}
      <section id="product" className="py-16 md:py-24 bg-void relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neon">🛒 Shop</span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-[0.02em] text-white">THE COLLECTION<span className="text-neon">.</span></h2>
          </div>

          {/* 4-COLUMN GRID for many items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <div key={p.id} className="product-card group">
                {/* Image - Transparent background */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <img src={p.image} alt={p.name} className="product-img w-full h-full object-cover transition-transform duration-500 ease-out"/>
                  <div className="product-overlay absolute inset-0 bg-neon/5 opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-0.5 text-[8px] font-bold tracking-[0.15em] uppercase rounded-full ${p.tagColor}`}>{p.tag}</span>
                  </div>
                </div>
                
                {/* Info - Clean & Compact */}
                <div className="mt-3">
                  <h3 className="font-display text-base tracking-[0.04em] text-white">{p.name}</h3>
                  <p className="text-[10px] text-smoke mt-0.5">{p.desc}</p>
                  <span className="font-display text-sm text-neon block mt-1">EGP {Math.round(Number(p.price))}</span>
                </div>

                {/* Size Selector - Tiny pills */}
                <div className="mt-2 flex items-center gap-1 flex-wrap">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button 
                      key={size} 
                      className={`size-btn text-[10px] px-2 py-1 ${size === 'M' ? 'active' : ''}`} 
                      onClick={(e) => handleSizeSelect(e, p.id, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Add to Cart - Minimal button */}
                <button 
                  className="snipcart-add-item mt-2 w-full py-2.5 bg-neon/10 text-neon text-[10px] font-bold tracking-[0.1em] uppercase rounded-lg border border-neon/20 hover:bg-neon hover:text-void transition-all duration-300 flex items-center justify-center gap-1.5"
                  data-item-id={p.id}
                  data-item-price={p.price}
                  data-item-url="/"
                  data-item-description={p.desc}
                  data-item-image={p.image}
                  data-item-name={`${p.name} — ${p.desc}`}
                  data-item-custom1-name="Size"
                  data-item-custom1-value="M"
                  data-item-custom1-options="S|M|L|XL|XXL"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CULTURE SECTION ====== */}
      <section id="culture" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/urban-street-culture/1920/1080.jpg" alt="Street culture" className="w-full h-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-void/90"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neon/5 via-transparent to-electric/5 animate-bg-scroll"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neon">⚡ The Culture</span>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-[0.02em] text-white leading-tight">NOT JUST<br/>A BRAND<span className="text-neon">.</span></h2>
              <h2 className="font-display text-5xl md:text-6xl tracking-[0.02em] gradient-text leading-tight">IT&apos;S A<br/>MOVEMENT.</h2>
              <p className="mt-6 text-sm text-smoke leading-relaxed max-w-md">OS was born on the streets. Every piece carries the energy of the city. We don&apos;t follow trends. We set them.</p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="text-center p-4 rounded-2xl bg-void-light border border-ash">
                  <span className="font-display text-2xl text-neon">100%</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-smoke mt-1">Cotton</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-void-light border border-ash">
                  <span className="font-display text-2xl text-electric">OS</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-smoke mt-1">Fit</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-void-light border border-ash">
                  <span className="font-display text-2xl text-hot">EG</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-smoke mt-1">Made In</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src="https://picsum.photos/seed/streetwear-culture1/600/750.jpg" alt="Culture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl bg-void-light border border-ash aspect-square p-6 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-5xl text-neon animate-pulse-neon">OS</span>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-smoke mt-2">Since Day 1</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-void-light border border-ash aspect-square p-6 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl">🇪🇬</span>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-smoke mt-2">Local Brand</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src="https://picsum.photos/seed/streetwear-culture2/600/750.jpg" alt="Culture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LOOKBOOK ====== */}
      <section id="lookbook" className="py-16 md:py-24 bg-void-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neon">📸 Lookbook</span>
          <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-[0.02em] text-white">STREET STYLE<span className="text-neon">.</span></h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-6 md:px-12">
          {[
            { seed: 'street-look1', title: '01 — Rooftop Sessions', desc: 'OS Tee + Cargo' },
            { seed: 'street-look2', title: '02 — Downtown Run', desc: 'OS Oversized + Joggers' },
            { seed: 'street-look3', title: '03 — Late Night', desc: 'OS Layered' },
            { seed: 'street-look4', title: '04 — Heatwave', desc: 'OS Tee + Shorts' },
            { seed: 'street-look5', title: '05 — The Crew', desc: 'Full OS Capsule' },
          ].map((look, i) => (
            <div key={i} className="flex-shrink-0 w-[240px] md:w-[300px] snap-start group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={`https://picsum.photos/seed/${look.seed}/680/900.jpg`} alt={look.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-[10px] font-bold tracking-[0.1em]">{look.title}</p>
                </div>
              </div>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-smoke font-medium">{look.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== MANIFESTO ====== */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/urban-night-egypt/1920/800.jpg" alt="Urban night" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-void/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-3xl">⚡</span>
          <blockquote className="mt-6 font-display text-3xl md:text-5xl text-white leading-tight tracking-[0.02em]">
            WE DON&apos;T DRESS TO IMPRESS.<br/><span className="gradient-text">WE DRESS TO EXPRESS.</span>
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-neon/40"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-neon/60 font-bold">OS Manifesto</span>
            <div className="w-12 h-px bg-neon/40"></div>
          </div>
        </div>
      </section>

      {/* ====== COMPLETE THE LOOK ====== */}
      <section className="py-16 md:py-24 bg-void-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neon">🧢 Style It</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[0.02em] text-white mb-10">COMPLETE THE FIT<span className="text-neon">.</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Black Joggers', desc: 'Tapered · 340gsm', price: 'EGP 599', seed: 'black-joggers-os' },
              { name: 'OS Cap', desc: 'Snapback · Embroidered', price: 'EGP 249', seed: 'cap-os-street' },
              { name: 'Slides', desc: 'Molded · OS embossed', price: 'EGP 299', seed: 'slides-os-brand' },
              { name: 'Tote Bag', desc: 'Heavy canvas · OS print', price: 'EGP 199', seed: 'tote-os-bag' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl aspect-square p-3 flex items-center justify-center border border-ash/50 group-hover:border-neon/30 transition-colors">
                  <img src={`https://picsum.photos/seed/${item.seed}/400/400.jpg`} alt={item.name} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <h4 className="mt-2 font-display text-sm tracking-[0.04em] text-white">{item.name}</h4>
                <p className="text-[10px] text-smoke mt-0.5">{item.desc}</p>
                <span className="font-display text-sm text-neon mt-0.5 block">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="py-16 md:py-20 bg-void relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon/5 via-transparent to-hot/5 animate-bg-scroll"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <span className="text-2xl">📩</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[0.02em] text-white">GET EARLY ACCESS<span className="text-neon">.</span></h2>
          <p className="mt-3 text-sm text-smoke">Be first to know about new drops &amp; exclusive discounts.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Welcome to the OS family! 🔥'); }}>
            <input type="email" placeholder="Your email" required className="flex-1 px-5 py-3 bg-void-light border border-ash rounded-full text-sm text-white placeholder-smoke/50 focus:outline-none focus:border-neon transition-colors"/>
            <button type="submit" className="px-6 py-3 bg-neon text-void text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-white transition-all">Join</button>
          </form>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-void-light py-12 border-t border-ash">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-display text-4xl tracking-wider text-neon animate-pulse-neon">OS</span>
              <p className="mt-3 text-xs text-smoke leading-relaxed max-w-[200px]">Local streetwear brand. Made for the streets. Built for the culture. 🇪🇬</p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Shop</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">All Products</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Tees</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Bottoms</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Info</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">About OS</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Shipping</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Follow</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Instagram</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">TikTok</a></li>
                <li><a href="#" className="text-xs text-smoke hover:text-neon transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-ash text-center">
            <p className="text-[10px] text-smoke/40 tracking-wide">© 2025 OS. All rights reserved. Made in Egypt 🇪🇬</p>
          </div>
        </div>
      </footer>

      {/* ====== FLOATING CART ====== */}
      <button className="snipcart-checkout text-void">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
      </button>
    </main>
  )
}