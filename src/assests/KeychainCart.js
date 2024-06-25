import React from 'react'
import '../components/ProductCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/CartSlice';
import { useNavigate } from 'react-router';
function KeychainCart({keychain}) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleAddToCart = (chain) => {
      dispatch(addToCart(chain));
      navigate("/cart")
    }
  return (
    <div className="card cardDiv" style={{ width: '15rem' }}>
    <img src={keychain.image} className="card-img-top" alt={keychain.name} />
    <div className="card-body">
      <h5 className="card-title">{keychain.name}</h5>
      <p className="card-text">Price: ₹{keychain.price}</p>
    </div>
    <button type="button" className='addCartBtn' class="btn btn-primary" onClick={() => handleAddToCart(keychain)}>Add to Cart</button>
  </div>
  )
}

export default KeychainCart