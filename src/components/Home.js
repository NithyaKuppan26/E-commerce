import React from 'react'
import Slide from '../assests/Slide'
import Gifts from '../assests/Gifts'
import Scroll from '../assests/Scroll'
import Footer from '../assests/Footer'
import KeyChainDiv from './KeyChainDiv'

function Home() {
  return (
    <div className='home'>
      <KeyChainDiv/>
      <Slide/>
      <Gifts/>
      <Scroll/> 
      <Footer/>
    </div>
  )
}

export default Home