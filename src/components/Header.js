import React from 'react'
import { BiCheckShield } from "react-icons/bi";
import { TbTruckDelivery, TbCrown } from "react-icons/tb";
import { VscCreditCard } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCart3, BsBoxArrowLeft } from "react-icons/bs";
import '../styles/header.scss';
export default function Header() {
  return (
    <div>
        <header>
        <div className="container">
            <div className='promocao'>
                <div className="compraPromocoes">
                  <div className='buttonCompra'>
                    <BiCheckShield size={13.75}/>
                    
                  </div>
                  <p>Compra <span className='linkPromocao'>100% segura</span></p> 
              </div>
              <div className="compraPromocoes"> 
                  <div className='buttonCompra'>
                    <TbTruckDelivery size={13.75}/>
                  </div>
                <p><span className='linkPromocao'>Frete grátis</span> acima de R$ 200</p> 
              </div>
              <div className="compraPromocoes">
                    <div className='buttonCompra'>
                      <VscCreditCard size={13.75}/>
                    </div>
                <p><span className='linkPromocao'>Parcele</span> suas compras</p> 
              </div>
            </div>
          
          <div className='busca'>
            <div className='logo'>
              <img src={require("../assets/logo.png")}/>
            </div>
            <div className='campoBusca'>
                  <input type="text" placeholder="O que você está buscando?"/>
               <button className="buttonPesquisa">
                  <CiSearch size={25} color="#9F9F9F"/>
               </button>
            </div>
            <div className='divIcones'>
              <BsBoxArrowLeft className='icones' size={20} color="#9F9F9F"/>
              <BsHeart className='icones' size={20} color="#9F9F9F"/>
              <HiOutlineUserCircle className='icones'  size={20} color="#9F9F9F"/>
              <BsCart3 className='icones' size={20} color="#9F9F9F"/>
              
            </div>
          </div>

          <nav className='menu'>
              <ul className='listaMenu'>
                <li>
                   todas categorias
                </li>
                <li>
                  supermercado
                </li>
                <li>
                  livros  
                </li>
                <li className='moda'>
                  moda  
                </li>
                <li>
                  lançamentos  
                </li>
                <li>
                  <span className='linkPromocao'>
                    ofertas do dia
                  </span>
                </li>
                <li>
                  <div className='iconAssinatura'>
                    <TbCrown size={20} style={{marginTop:-2, marginRight:5 }}/>
                    assinatura
                  </div>
                  
                </li>
              </ul>

          </nav>
         
        </div>
        
      </header> 
    </div>
  )
}
