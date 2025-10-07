import React from 'react';
import { Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../lib/types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 rounded-full bg-brand-yellow px-2 py-1 text-xs font-bold text-neutral-800">
            NEW
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
            - {(((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)}%
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-neutral-500">{product.category}</p>
        <h3 className="mt-1 flex-1 font-semibold text-neutral-800 group-hover:text-brand-green">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4" fill="currentColor" />
            <span className="font-bold">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-neutral-400">({product.reviews} reviews)</span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-lg font-bold text-neutral-900">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-sm text-neutral-500 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white transition-colors hover:bg-brand-green-dark">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
