import '../css/styles.css';
import { BiCheckShield } from "react-icons/bi";
import { TbTruckDelivery, TbCrown } from "react-icons/tb";
import { VscCreditCard } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCart3, BsBoxArrowLeft } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';



function TelaPrincipal() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() =>{
    axios.get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
    .then((response)=>{
        setData((response.data.products))
        // console.log(response.data)
    })
    .catch(() =>{
        console.log("deu tudo errado");
    })

}, [])

const handleLeftClick = (e) =>{
  e.preventDefault();
  console.log(carousel.current.offsetWidth);
  carousel.current.scrollLeft -= carousel.current.offsetWidth;
}

const handleRightClick = (e) =>{
  e.preventDefault();
  // console.log(carousel.current.offsetWidth);
  carousel.current.scrollLeft += carousel.current.offsetWidth;
}



  if(!data || !data.length) return null


  return (
    <div className='principal'>
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
                    <TbCrown size={20}/>
                    assinatura
                  </div>
                  
                </li>
              </ul>

          </nav>
         
        </div>
        
      </header> 
      
      <main>
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
                     
                          <button className='buttonVerProduto'>
                            Ver produto
                          </button>
                      
                </div>
            
          </div>


          </div>

          <div className='container'>
              <div className='opcoes'>
                    <div className='cards'>
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

          <div className='container'>
              <div  className='produtosRelacionados'>
                <div className='teste'>
                    <h1>
                      Produtos relacionados
                    </h1>
                </div>    
              </div>
              <div className='opcoesDeMenu'>
                <ul className='listasOpcoesMenu'>
                  <li><span className='linkPromocao'>celular<span/></span></li>
                  <li>acessorios</li>
                  <li>tablets</li>
                  <li>notbooks</li>
                  <li>tvs</li>
                  <li>ver todos</li>
                </ul>
              </div>
              {/* <div className='verTodos'>
                    <h4>
                      Ver todos
                    </h4>
                </div> */}
          </div>

          <div className='container'>
              <div className='cardsProdutos' ref={carousel}> 
                 
                      {data.map((dat, key)=>{

                          return(
                            <div className='cardCelulares' >
                            <div className='subCardCelulares'>
                              <div className='imagemCardCelulares'>
                                <img src={dat.photo}/>
                              </div>
                              <div className='descricaoCardCelulares'>
                                <p> {dat.descriptionShort}</p>
                              </div>
                              <div className='nomeCardCelulares'>
                              <p>{dat.productName}</p>
                               
                              </div>
                              <div className='valorAntesCardCelulares'>
                                <span>R$</span>30,90
                              </div>
                              <div className='precoCardCelulares'>
                              <span>R$</span>{dat.price}
                              </div>
                              <div className='jurosCardCelulares'>
                                <p>ou 2x de R$ 49,95 sem juros</p>
                              </div>
                              
                              <div className='freteCardCelulares'></div>
                              <div className='buttonCardCelulares'>
                                <button>Comprar</button>
                              </div>
                            </div>
                          </div> 
                           )
                          })}
                   
              </div>

                <div className="buttonsSetas">
                   <button onClick={handleLeftClick}>
                      <IoIosArrowBack className='setaEsquerda' size={50}/>
                    </button>
                   <button onClick={handleRightClick}>
                      <IoIosArrowForward className='setaDireita' size={50}/>
                   </button>
                </div>

          </div>

          <div className='container'>
              <div className='parceiros'>
                <div className='parceirosImagem'>
                    <div className='textoParceiros'>
                      <h1>Parceiros</h1>
                    </div>
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
                      <div className='textoParceiros'>
                        <h1>Parceiros</h1>
                      </div>
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
          <div className='container'>
              <div  className='produtosRelacionados'>
                <div className='teste'>
                    <h1>
                      Produtos relacionados
                    </h1>
                </div>    
              </div>
          
              <div className='verTodos'>
                    <h4>
                      Ver todos
                    </h4>
                </div>
          </div>
          <div className='container'>
              <div className='cardsProdutos' ref={carousel}> 
                 
                      {data.map((dat, key)=>{

                          return(
                            <div className='cardCelulares' >
                            <div className='subCardCelulares'>
                              <div className='imagemCardCelulares'>
                                <img src={dat.photo}/>
                              </div>
                              <div className='descricaoCardCelulares'>
                                <p> {dat.descriptionShort}</p>
                              </div>
                              <div className='nomeCardCelulares'>
                              <p>{dat.productName}</p>
                               
                              </div>
                              <div className='valorAntesCardCelulares'>
                                <span>R$</span>30,90
                              </div>
                              <div className='precoCardCelulares'>
                              <span>R$</span>{dat.price}
                              </div>
                              <div className='jurosCardCelulares'>
                                <p>ou 2x de R$ 49,95 sem juros</p>
                              </div>
                              
                              <div className='freteCardCelulares'></div>
                              <div className='buttonCardCelulares'>
                                <button>Comprar</button>
                              </div>
                            </div>
                          </div> 
                           )
                          })}
                   
              </div>

                <div className="buttonsSetas">
                   <button onClick={handleLeftClick}>
                      <IoIosArrowBack className='setaEsquerda' size={50}/>
                    </button>
                   <button onClick={handleRightClick}>
                      <IoIosArrowForward className='setaDireita' size={50}/>
                   </button>
                </div>

        </div>
          <div className='container'>
              <div className='parceiros'>
                <div className='parceirosImagem'>
                    <div className='textoParceiros'>
                      <h1>Parceiros</h1>
                    </div>
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
                      <div className='textoParceiros'>
                        <h1>Parceiros</h1>
                      </div>
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

          <div className='container'>
                <div className='navegueMarcas'>
                      <div className='tituloMarcas'>
                          <h1>
                          Navegue por marcas
                          </h1>
                      </div>
                      <div className='todasAsMarcas'>
                            <div className='circuloMarca'>
                              <img className='imagemCirculoMarca' src={require("../assets/logo.png")}/>
                            </div>
                            <div className='circuloMarca'>
                              <img className='imagemCirculoMarca' src={require("../assets/logo.png")}/>
                            </div>
                            <div className='circuloMarca'>
                              <img className='imagemCirculoMarca' src={require("../assets/logo.png")}/>
                            </div>
                            <div className='circuloMarca'>
                              <img className='imagemCirculoMarca' src={require("../assets/logo.png")}/>
                            </div>
                            <div className='circuloMarca'>
                              <img className='imagemCirculoMarca' src={require("../assets/logo.png")}/>
                            </div>
                            
                      </div>
                </div>       
          </div>
          
          <div className='container'>
              <div  className='produtosRelacionados'>
                <div className='teste'>
                    <h1>
                      Produtos relacionados
                    </h1>
                </div>    
              </div>
          
              <div className='verTodos'>
                    <h4>
                      Ver todos
                    </h4>
                </div>
          </div>
          <div className='container'>
              <div className='cardsProdutos' ref={carousel}> 
                 
                      {data.map((dat, key)=>{

                          return(
                            <div className='cardCelulares' >
                            <div className='subCardCelulares'>
                              <div className='imagemCardCelulares'>
                                <img src={dat.photo}/>
                              </div>
                              <div className='descricaoCardCelulares'>
                                <p> {dat.descriptionShort}</p>
                              </div>
                              <div className='nomeCardCelulares'>
                              <p>{dat.productName}</p>
                               
                              </div>
                              <div className='valorAntesCardCelulares'>
                                <span>R$</span>30,90
                              </div>
                              <div className='precoCardCelulares'>
                              <span>R$</span>{dat.price}
                              </div>
                              <div className='jurosCardCelulares'>
                                <p>ou 2x de R$ 49,95 sem juros</p>
                              </div>
                              
                              <div className='freteCardCelulares'></div>
                              <div className='buttonCardCelulares'>
                                <button>Comprar</button>
                              </div>
                            </div>
                          </div> 
                           )
                          })}
                   
              </div>

                <div className="buttonsSetas">
                   <button onClick={handleLeftClick}>
                      <IoIosArrowBack className='setaEsquerda' size={50}/>
                    </button>
                   <button onClick={handleRightClick}>
                      <IoIosArrowForward className='setaDireita' size={50}/>
                   </button>
                </div>

        </div>
    </main>

    <footer>
        <div className='container'>
            <div className='primeiraParteFooter'>
              <div className='sobreNos'>
                <div className='tituloSobreNos'>
                    <h3>Sobre nós</h3>
                </div>
                <div className='opcoesParaCliente'>
                        <p>
                          conheça <th/>
                          como comprar<th/>
                          indicacao e desconto
                          
                        </p>
                </div>
                 
                <div className='iconesRedeSociais'>
                  <FiFacebook className='iconesSociais' size={25}/>
                  <SiInstagram className='iconesSociais'  size={25}/>
                  <AiOutlineYoutube className='iconesSociais' size={25}/>

                 
                </div>        
              </div>
              <div className='informacoes'></div>
              <div className='formasPagamento'></div>
              <div className='cadastro'></div>
            </div>
            <div className='segundaParteFooter'></div>             
        </div>
    </footer>

    </div>

   
  );
}

export default TelaPrincipal;
