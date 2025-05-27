import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdStar } from "react-icons/io";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
      {products.map((product) => (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 overflow-hidden">
            <img 
              src={product.image} 
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="p-6">
            <h2 className='text-xl font-semibold text-gray-800 mb-3 line-clamp-2'>{product.title}</h2>
            <p className='text-sm text-gray-600 mb-4 line-clamp-3'>{product.description}</p>
            <div className="space-y-2">
              <p className='text-lg font-bold text-emerald-600'>${product.price.toFixed(2)}</p>
              <p className='text-sm text-gray-700'>
                Category: <span className="uppercase">{product.category}</span>
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500"><IoMdStar/></span>
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
