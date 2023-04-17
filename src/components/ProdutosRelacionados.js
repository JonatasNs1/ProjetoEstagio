import React from 'react'
import '../styles/produtosRelacionados.scss';
export default function ProdutosRelacionados() {
  return (
    <div className='container'>
    <div  className='produtosRelacionados'>
      <div>
          <h1>
            Produtos relacionados
          </h1>
      </div>    
    </div>
    <div className='opcoesDeMenu'>
      <ul className='listasOpcoesMenu'>
        <li><span className='linkPromocao'>celular<span/></span></li>
        <li>acessórios</li>
        <li>tablets</li>
        <li>notbooks</li>
        <li>tvs</li>
        <li>ver todos</li>
      </ul>
    </div>
</div>
  )
}
