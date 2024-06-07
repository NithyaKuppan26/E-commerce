import React from 'react';

import ProductCard from './ProductCard';
import './ProductList.css';
import { useSelector } from 'react-redux';



function ProductList() {
    const products = useSelector((state) => state.products);
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
