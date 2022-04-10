import React from "react";
import './home.css'
import macImage from './images/macbook-pro.png'

const Home = () => {

  return (
    <div className='home' id='home'>
      <div className='home-image-wrapper'><img className='home-image' src={macImage} alt=""/></div>

      <h2 className='home-title'>Официальный дилер Apple в Кыргызстане</h2>
      <h3 className='home-subtitle'>Вся продукция Mac</h3>
    </div>
  )
}

export default Home