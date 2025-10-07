import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories } from '../lib/mockData';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] max-h-[450px] w-full bg-brand-green-light">
        <div className="container mx-auto flex h-full items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 max-w-xl text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl md:text-6xl">
              Fresh & Healthy <br/>
              <span className="text-brand-green">Organic Food</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              Get the best quality and freshest groceries delivered to your doorstep.
            </p>
            <div className="mt-8">
              <Link
                to="#"
                className="inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        </div>
        <img 
          src="https://i.ibb.co/6rC6PzQ/hero-bg-leaves.png" 
          alt="Decorative leaves" 
          className="absolute bottom-0 right-0 h-full w-auto object-cover opacity-30 md:opacity-80"
        />
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-neutral-800">Shop by Category</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg',
                category.bgColor
              )}
            >
              <category.icon className={cn('h-10 w-10', category.color)} />
              <span className="font-semibold text-neutral-700">{category.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-800">Popular Products</h2>
          <Link to="#" className="flex items-center gap-1 text-brand-green hover:underline">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {mockProducts.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
