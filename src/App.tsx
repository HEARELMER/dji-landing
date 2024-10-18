import React, { useState } from 'react';
import { products } from './data/products'; 
import ProductGrid from './components/ProductGrid';
import FilterBar from './components/FilterBar';
import { Navbar } from './components/Navbar';
import { Button } from "@/components/ui/button"
import GridCards from './components/GridCards';
import Slide from './components/Slide';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
const App: React.FC = () => {
  const [filters, setFilters] = useState({
    category: '',
    color: '',
    price: '',
    features: '' 
});


  return (
    <div className=" w-full h-full   flex flex-col items-center ">
        <Navbar/>
        <div className='w-full px-[10%] h-full py-10 bg-white mt-20'>
         <Slide/>
          <GridCards/>
        </div>
          <BlogGrid/>
          <Footer/>
    </div>
  );
};

export default App;
