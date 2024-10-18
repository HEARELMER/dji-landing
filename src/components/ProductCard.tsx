import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  counter:number
}

const ProductCard: React.FC<ProductCardProps> = ({ product,counter=1 }) => {
  
  return (
    <div className="p-4 border rounded-md  ">
      <div className={`w-[16px] h-[16px] rounded-full absolute flex items-center  ml-64    mt-4  ${product.colorTailwind}  `}>
      <span className=' font-bold text-slate-400  ml-6 flex'> {counter === 1 ? "" : "+"+ (counter -1) }</span>
      </div>
      <div className=' bg-white shadow-sm rounded flex items-center justify-center w-80 h-96 '>
             <img src={product.photo} alt="" className='w-auto h-auto  ' />


      </div>
      <div className=' mt-4'>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700"> {product.features}</p>
      <p className="font-semibold text-md ">€{product.price.toFixed(2)}</p>

      </div>
    </div>
  );
};

export default ProductCard;