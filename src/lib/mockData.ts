import { faker } from '@faker-js/faker';
import { Apple, Beef, Carrot, Milk, Fish } from 'lucide-react';
import { Product, Category, CartItem } from './types';

const productCategories = ['Vegetables', 'Fruits', 'Meat', 'Dairy', 'Seafood'];

export const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const price = parseFloat(faker.commerce.price({ min: 1, max: 20 }));
    const hasDiscount = faker.datatype.boolean();
    products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      category: faker.helpers.arrayElement(productCategories),
      price: hasDiscount ? parseFloat((price * 0.8).toFixed(2)) : price,
      originalPrice: hasDiscount ? price : undefined,
      rating: faker.number.float({ min: 3.5, max: 5, precision: 0.1 }),
      reviews: faker.number.int({ min: 10, max: 500 }),
      imageUrl: `https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/${faker.color.rgb({ format: 'hex', casing: 'lower' }).substring(1)}/white?text=${encodeURIComponent(faker.commerce.productAdjective())}`,
      isNew: faker.datatype.boolean({ probability: 0.2 }),
    });
  }
  return products;
};

export const categories: Category[] = [
    { name: 'Fruits', icon: Apple, color: 'text-red-500', bgColor: 'bg-red-100' },
    { name: 'Vegetables', icon: Carrot, color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { name: 'Meat', icon: Beef, color: 'text-red-700', bgColor: 'bg-red-200' },
    { name: 'Dairy', icon: Milk, color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { name: 'Seafood', icon: Fish, color: 'text-cyan-500', bgColor: 'bg-cyan-100' },
];

export const mockProducts = generateProducts(20);

export const mockCartItems: CartItem[] = mockProducts.slice(0, 3).map(p => ({ ...p, quantity: faker.number.int({ min: 1, max: 3 }) }));
