"use client";

import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Dark overlay behind the cart */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* The Cart Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold tracking-wide">YOUR CART</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-sm text-gray-400">Your cart is empty</p>
              <button onClick={() => setIsCartOpen(false)} className="mt-4 text-xs font-semibold tracking-widest uppercase text-black underline">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-gray-100"/>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Size: {item.selectedSize}</p>
                    <p className="text-sm font-semibold mt-1">EGP {item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-200">
                        <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)} className="px-2 py-1 text-xs text-gray-500 hover:text-black">−</button>
                        <span className="px-2 py-1 text-xs font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)} className="px-2 py-1 text-xs text-gray-500 hover:text-black">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-[10px] text-gray-400 hover:text-red-500 uppercase tracking-wide transition-colors">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">Total</span>
              <span className="text-lg font-bold">EGP {cartTotal}</span>
            </div>
            <button 
              className="w-full py-4 bg-seirra-black text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-black/80 transition-all"
              onClick={() => alert('Kashier Payment will go here!')}
            >
              Checkout — EGP {cartTotal}
            </button>
            <p className="text-center text-[9px] text-gray-300 mt-3 tracking-wide">Shipping & taxes calculated at checkout</p>
          </div>
        )}
      </div>
    </>
  );
}