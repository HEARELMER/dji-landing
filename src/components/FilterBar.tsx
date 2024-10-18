import React from 'react';
import { products } from '../data/products';
import { Select } from './Select';

interface FilterProps {
  filters: {
      category: string;
      color: string;
      price: string;
      features: string; 
  };
  setFilters: React.Dispatch<React.SetStateAction<{
      category: string;
      color: string;
      price: string;
      features: string;  
  }>>;
}

const FilterBar: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const handleFilterChange = (name: string) => (value: string) => {
      setFilters({
          ...filters,
          [name]: value,
      });
  };

  const categories = new Set<string>();
  const colors = new Set<string>();
  const featuresSet = new Set<string>(); 

  for (let index = 0; index < products.length; index++) {
      categories.add(products[index].category);
      colors.add(products[index].color);
      featuresSet.add(products[index].features);  
  }

  const categoryOptions = Array.from(categories).map(category => ({
      value: category,
      label: category,
  }));

  const colorOptions = Array.from(colors).map(color => ({
      value: color,
      label: color.charAt(0).toUpperCase() + color.slice(1),
  }));

  const featuresOptions = Array.from(featuresSet).map(feature => ({
      value: feature,
      label: feature,
  }));

  const priceOptions = [
      { value: '', label: 'Todos los Precios' },
      { value: '0-50', label: 'S/0 - S/50' },
      { value: '0-150', label: 'S/0 - S/150' },
      { value: '150-300', label: 'S/150 - S/300' },
  ];

  return (
      <div className="flex gap-4 mb-4">
          <Select
              text="Categoría"
              options={[{ value: '', label: 'Todas' }, ...categoryOptions]}
              onChange={handleFilterChange('category')}
          />
          <Select
              text="Color"
              options={[{ value: '', label: 'Todos' }, ...colorOptions]}
              onChange={handleFilterChange('color')}
          />
          <Select
              text="Precio"
              options={priceOptions}
              onChange={handleFilterChange('price')}
          />
          <Select
              text="Características"
              options={[{ value: '', label: 'Todas' }, ...featuresOptions]}  
              onChange={handleFilterChange('features')}
          />
      </div>
  );
};

export default FilterBar;
