import React from 'react'
import '../components/ProductCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/CartSlice';
import { useNavigate } from 'react-router';
function SearchItem({searchItem}) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleAddToCart = (searchValue) => {
      dispatch(addToCart(searchValue));
      navigate("/cart")
    }
  return (
    <div className="card cardDiv" style={{ width: '15rem' }}>
    <img src={searchItem.image} className="card-img-top" alt={searchItem.name} />
    <div className="card-body">
      <h5 className="card-title">{searchItem.name}</h5>
      <p className="card-text">Price: ₹{searchItem.price}</p>
    </div>
    <button type="button" className='addCartBtn' class="btn btn-primary" onClick={() => handleAddToCart(searchItem)}>Add to Cart</button>
  </div>
  )
}

export default SearchItem