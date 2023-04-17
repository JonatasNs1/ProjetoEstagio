import React from 'react'
import ButtonBanner from './ButtonBanner';
import '../styles/banner.scss';

export default function Banner() {
  return (
    <div className='container'>
    <div className='banner'>
      
        <div className='descricaoPromocao'>
              <p>
              Venha conhecer nossas <br></br>
              promoções
               
              </p>
              <p>
              50% Off nos produtos 
              </p>
             
               <ButtonBanner
               />
              
        </div>
    
     </div>


  </div>
  )
}
