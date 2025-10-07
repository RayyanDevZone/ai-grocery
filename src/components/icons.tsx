import { ShoppingBasket } from 'lucide-react';
import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <ShoppingBasket className="h-8 w-8 text-brand-green" />
    <span className="text-2xl font-bold text-neutral-800">FreshCart</span>
  </div>
);
