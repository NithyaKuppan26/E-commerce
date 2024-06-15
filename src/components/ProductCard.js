import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { useNavigate } from 'react-router';
function ProductCard({ product}) {
    
    
    const dispatch = useDispatch();
      const navigate=useNavigate()
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      navigate("/cart")
    };
  return (
    <div className="card cardDiv" style={{ width: '15rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
      </div>
      <button type="button" className='addCartBtn' class="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
     
    </div>
  );
}

export default ProductCard;
