import React from 'react';
import { Link } from 'react-router-dom';
import { mockCartItems } from '../lib/mockData';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const CartPage: React.FC = () => {
  const subtotal = mockCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-8">
      <h1 className="text-3xl font-bold text-neutral-800 mb-8">Your Cart</h1>
      {mockCartItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow">
          <ShoppingCart className="mx-auto h-16 w-16 text-neutral-400" />
          <h2 className="mt-4 text-2xl font-semibold text-neutral-700">Your cart is empty</h2>
          <p className="mt-2 text-neutral-500">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <AnimatePresence>
                {mockCartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <img src={item.imageUrl} alt={item.name} className="h-24 w-24 rounded-md object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-neutral-500">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-md p-1 hover:bg-neutral-200"><Minus className="h-4 w-4" /></button>
                      <span>{item.quantity}</span>
                      <button className="rounded-md p-1 hover:bg-neutral-200"><Plus className="h-4 w-4" /></button>
                    </div>
                    <p className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="text-neutral-500 hover:text-red-500"><Trash2 className="h-5 w-5" /></button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-brand-green py-3 font-semibold text-white hover:bg-brand-green-dark">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
