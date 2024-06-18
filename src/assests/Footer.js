import React from 'react'
import './Footer.css'
import logo from './LogoBlack.png'
function Footer() {
  return (
    <div className='footerDiv'>
        <footer>
  <div class="coll">
    <img class="logo1" src={logo}/>
    <h4>Contact</h4>
    <p><strong>Address:</strong> 110/1 G.S.T Road Guduvancheri-603202</p>
    <p><strong>Phone:</strong> 99400 81650</p>
    <p><strong>Email:</strong> dineshdigitaldreamz@gmail.com</p>
    <p><strong>Hours:</strong> 07:00am - 09:00pm, Mon - Sat</p>
  </div>
  <div class="coll1">
    <h4>About</h4>
            <a href="/">About us</a>
            <a href="/">Delivery Information</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Contact us</a>
  </div>
  <div class="coll2">
    <h4>My Account</h4>
    <a href="/">Sign in</a>
    <a href="/">view Cart</a>
    <a href="/">My Wishlist</a>
    <a href="/">Track My Order</a>
    <a href="/">Help</a>
  </div>
</footer>
    </div>
  )
}

export default Footer