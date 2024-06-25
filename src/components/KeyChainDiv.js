import React from 'react'
import KeyChain from '../images/2.jpg'
import './KeyChainDiv.css'
import { Link } from 'react-router-dom'
function KeyChainDiv() {
  return (
    <div className='keyDiv'>
        <Link to={'/keychain'}>
        <img className='DivBox' src={KeyChain} alt='keychain'/>
        <p><bold>Keychain</bold></p>
        </Link>
        
    </div>
  )
}

export default KeyChainDiv