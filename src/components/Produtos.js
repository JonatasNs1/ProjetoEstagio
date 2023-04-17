import React from 'react'
import '../styles/parceiros.scss';
import ParceiroTexto from './ParceiroTexto';

export default function Produtos() {
  return (
    
    <div className='container'>
    <div className='parceiros'>
      <div className='parceirosImagem'>
      <ParceiroTexto
          texto={"Produtos"}
          />
          <div className='descricaoParceiros'>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className='buttonParceiros'>
              <button>
                confira
              </button>
          </div>
      </div>
      <div className='parceirosImagem'>
      <ParceiroTexto
          texto={"Produtos"}
          />
            <div className='descricaoParceiros'>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='buttonParceiros'>
              <button>
                confira
              </button>
            </div>
      </div>
     
    </div>
</div>
  )
}
