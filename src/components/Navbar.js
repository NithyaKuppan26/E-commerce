import React from 'react'
import logo from '../assests/Logo_whi.png'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Search from './Search'
function Navbar() {
  const {cartTotalQuantity}=useSelector(state=>state.cart)
  return (
    <div className='navDiv'>
      <nav className='nav-bar'>
        <Link to={"/"}><img src={logo} alt='brand_logo'/></Link>
        <Search/>
        <Link to={"/"}><p className='ptag'>Home</p></Link>
        <Link to={"/products"}><p className='ptag'>Personalised gifts</p></Link>
        <Link to={"/photoshoot"}><p className='ptag'>Photoshoot</p></Link>
        <Link to={"/contact"}><p className='ptag'>Contact</p></Link>
        <Link to={"/signin"}><p className='ptag'>Sign in</p></Link>
        <Link to={"/cart"}>
          <div className='nav-bag'>
          <FaShoppingCart className='cart'/>
          <span className='cart-quantity'>
          <span className='span1'>{cartTotalQuantity}</span>
           </span>
          </div>
        </Link>
       
      </nav>
    </div>
  )
}

export default Navbar