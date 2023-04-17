import React from 'react'
import Econverse from '../assets/econverse.png';
import Vtex from '../assets/vtex.png';
import '../styles/segundaParteFooter.scss';

export default function SegundaParteFooter() {
  return (
    <div className='segundaParteFooter'>
        <div className='textoCopyright '>
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
        </div>
        <div className='logoEconverse'>
            <img src={Econverse}/>
        </div>
        <div className='logoVtex'>
            <img src={Vtex}/>
        </div>
    </div> 
  )
}
