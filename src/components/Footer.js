import React from 'react'
import PrimeiraParteFooter from './PrimeiraParteFooter';
import SegundaParteFooter from './SegundaParteFooter';
export default function Footer() {
  return (
    <footer>
    <div className='container'>
       <div>
        <PrimeiraParteFooter/>
       </div>
      <div>
        <SegundaParteFooter/>  
      </div>            
    </div>
</footer>
  )
}
