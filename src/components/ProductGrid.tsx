import React from 'react';
import { Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  filters: {
    category: string;
    color: string;
    price: string;
    features: string;
  };
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, filters }) => {
  const filteredProducts = products.filter((product) => {
    const { category, color, price, features } = filters;
    const priceRange = price ? price.split('-').map(Number) : [0, 1000];

    return (
      (!category || product.category === category) &&
      (!features || product.features === features) &&
      (!color || product.color === color) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  const counterMap: { [key: number]: number } = {};
  filteredProducts.forEach((product) => {
    counterMap[product.id] = (counterMap[product.id] || 0) + 1;
  });

  const uniqueProducts = Array.from(new Set(filteredProducts.map(product => product.id)))
    .map(id => filteredProducts.find(product => product.id === id) as Product);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {uniqueProducts.map((product) => (
        <ProductCard 
          counter={counterMap[product.id]} 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;
