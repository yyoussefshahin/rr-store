"use client";

export default function ProductCard({ product }) {
  const handleSizeSelect = (e, productId, size) => {
    const btn = document.querySelector(`.snipcart-add-item[data-item-id="${productId}"]`);
    if (btn) btn.setAttribute('data-item-custom1-value', size);
    const parent = e.target.parentElement;
    parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
        <img src={product.image} alt={product.name} className="product-img w-full h-full object-cover transition-transform duration-500 ease-out"/>
        <div className="product-overlay absolute inset-0 bg-neon/5 opacity-0 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-0.5 text-[8px] font-bold tracking-[0.15em] uppercase rounded-full ${product.tagColor}`}>{product.tag}</span>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="font-display text-base tracking-[0.04em] text-white">{product.name}</h3>
        <p className="text-[10px] text-smoke mt-0.5">{product.desc}</p>
        <span className="font-display text-sm text-neon block mt-1">EGP {Math.round(Number(product.price))}</span>
      </div>

      <div className="mt-2 flex items-center gap-1 flex-wrap">
        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
          <button key={size} className={`size-btn text-[10px] px-2 py-1 ${size === 'M' ? 'active' : ''}`} onClick={(e) => handleSizeSelect(e, product.id, size)}>
            {size}
          </button>
        ))}
      </div>

      <button 
        className="snipcart-add-item mt-2 w-full py-2.5 bg-neon/10 text-neon text-[10px] font-bold tracking-[0.1em] uppercase rounded-lg border border-neon/20 hover:bg-neon hover:text-void transition-all duration-300 flex items-center justify-center gap-1.5"
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-url="https://rr-store-kappa.vercel.app/shop"
        data-item-description={product.desc}
        data-item-image={product.image}
        data-item-name={`${product.name} — ${product.desc}`}
        data-item-custom1-name="Size"
        data-item-custom1-value="M"
        data-item-custom1-options="S|M|L|XL|XXL"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
        Add
      </button>
    </div>
  );
}