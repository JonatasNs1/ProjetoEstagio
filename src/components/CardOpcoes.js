import React from 'react'
import '../styles/cardOpcoes.scss';
export default function CardOpcoes() {
  return (
    <div className='container'>
    <div className='opcoes'>
          <div className='cardsTecnologia'>
            <img className='imgCards' src={require("../assets/monitorar.png")}/>
            
          </div>
          
          <div className='cards'>
            
             <img className='imgCards' src={require("../assets/supermercado.png")}/>
            
          </div>
            <div className='cards'>
            <img className='imgCards' src={require("../assets/bebidas.png")}/>
            </div>
            <div className='cards'>
            <img className='imgCards' src={require("../assets/ferramentas.png")}/>
            </div>
            <div className='cards'>
            <img className='imgCards' src={require("../assets/saude.png")}/>
            </div>
            <div className='cards'>
            <img className='imgCards' src={require("../assets/esportesFitness.png")}/>
            </div>
            <div className='cards'>
            <img className='imgCards' src={require("../assets/moda.png")}/>
            
            
            </div>
            
            <div>
      
    </div>  
    
    </div> 
    <div className='subTituloOpcoes'>
        <ul className='listasOpcoes'>
            <li><span className='linkPromocao'>Tecnologia<span/></span></li>
            <li>Supermercado</li>
            <li>Bebidas</li>
            <li>Ferramentas</li>
            <li>Saúde</li>
            <li>Esporte e Fitness</li>
            <li>Moda</li>
        </ul>
    </div>
</div>
  )
}
