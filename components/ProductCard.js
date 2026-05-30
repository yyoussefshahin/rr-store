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
    <div className="product-card group cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] bg-seirra-light">
        <img src={product.image} alt={product.name} className="product-img w-full h-full object-cover transition-transform duration-500"/>
        <div className="product-overlay absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300"></div>
        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 text-[8px] font-semibold tracking-[0.15em] uppercase bg-seirra-black text-white">{product.tag}</span>
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <h3 className="text-sm font-medium text-seirra-black tracking-wide">{product.name}</h3>
        <p className="text-[11px] text-seirra-gray mt-0.5">{product.desc}</p>
        <span className="text-sm font-semibold text-seirra-black block mt-1">EGP {Math.round(Number(product.price))}</span>
      </div>

      <div className="mt-2 flex items-center gap-1 flex-wrap">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button key={size} className={`size-btn text-[10px] px-2 py-1 ${size === 'M' ? 'active' : ''}`} onClick={(e) => handleSizeSelect(e, product.id, size)}>
            {size}
          </button>
        ))}
      </div>

      <button 
        className="snipcart-add-item mt-2 w-full py-2.5 bg-seirra-black text-white text-[10px] font-medium tracking-[0.12em] uppercase rounded hover:bg-seirra-dark transition-all duration-300"
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-url="https://rr-store-kappa.vercel.app/shop"
        data-item-description={product.desc}
        data-item-image={product.image}
        data-item-name={`${product.name} — ${product.desc}`}
        data-item-custom1-name="Size"
        data-item-custom1-value="M"
        data-item-custom1-options="S|M|L|XL"
      >
        Add to Cart
      </button>
    </div>
  );
}