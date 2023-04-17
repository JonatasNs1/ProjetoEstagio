import React from 'react'
import MarcaCirculo from './MarcaCirculo'
import { SlArrowRight } from "react-icons/sl";




export default function Marcas() {


  return (
    <div className='container'>
    <div className='navegueMarcas'>
          <div className='tituloMarcas'>
              <h1>
              Navegue por marcas
              </h1>
          </div>
          <div className='todasAsMarcas'>
                <div>
                <MarcaCirculo/>
                </div>
                <div>
                <MarcaCirculo/>
                </div>
                <div>
                <MarcaCirculo/>
                </div>
                <div>
                <MarcaCirculo/>
                </div>
                <div>
                <MarcaCirculo/>
                </div>
                
              

                <div className='arrowMarcas'>
                 <button > <SlArrowRight size={30}/></button>
                </div>
                
          </div>
    </div>       
</div>
  )
}
