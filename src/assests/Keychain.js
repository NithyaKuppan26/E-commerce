import React from 'react'
import { useSelector } from 'react-redux';
import KeychainCart from './KeychainCart';

function Keychain() {
    const products = useSelector((state) => state.products);
    const keyChainProducts=products.filter((product)=>product.name.toLowerCase().includes("keychain"))
  return (
    <div>Keychains
        
 

        {keyChainProducts.map((keychain) => (
            
        <KeychainCart key={keychain.id} keychain={keychain} />
      ))}
    </div>
  )
}

export default Keychain