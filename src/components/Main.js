import React from 'react'
import Banner from './Banner';
import CardOpcoes from './CardOpcoes';
import ProdutosRelacionados from './ProdutosRelacionados';
import ProdutosTodos from './ProdutosTodos';
import Marcas from './Marcas';
import CardProduto from './CardProduto';
import Parceiros from './Parceiros';
import Modal from './Modal';
export default function Main() {
  return (
    <main>
        <div>
          <Banner/>
        </div>

         <div>
          <CardOpcoes/>
         </div>

       <div>
        <ProdutosRelacionados/>
       </div>

       
          <div>
            <CardProduto/>
          </div>
       
          <div>
            <Parceiros/>
          </div>
          <ProdutosTodos/>
          <div>
            <CardProduto/>
          </div>
         <div>
            <Parceiros/>
         </div>

         <div>
          <Marcas/>
         </div>
          
          <div>
            <ProdutosTodos/>
          </div>

          <div>
            <CardProduto/>
          </div>
            
        
    </main>
  )
}
