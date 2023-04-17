
import '../styles/cardsProduto.scss';
import axios from 'axios';
import React, { useEffect,useState,  useRef} from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ButtonCard from './ButtonCard';
import ImagemCard from './ImagemCard';
import NomeCard from './NomeCard';
import DescricaoCard from './DescricaoCard'
import Desconto from './Desconto';
import PrecoCard from './PrecoCard';
import JurosCard from './JurosCard';
import FreteGratis from './FreteGratis';

function CardProduto() {

   
    
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    // const carousel2 = useRef(null);
    // const carousel3 = useRef(null);

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
return(
  <div className='container'>
              <div className='cardsProdutos' ref={carousel}> 
                 
                      {data.map((dat, key)=>{

                          return(
                          <div className='cardCelulares' >
                            <div className='subCardCelulares'>
                              <div>
                                <ImagemCard
                                photo={dat.photo}
                                />  
                               </div>
                             <div>
                             <NomeCard 
                                productName = {dat.productName}
                              />
                              </div>
                              <div>
                                  <DescricaoCard
                                  descriptionShort={dat.descriptionShort}
                                  />
                              </div>
                            
                            <div>
                                <Desconto/>
                            </div>
                              <div>
                                <PrecoCard
                                price = {dat.price}
                                />
                                </div>
                              <div>
                              <JurosCard/> 
                              </div>
                              
                           <div>
                              <FreteGratis/>
                            </div>
                              <ButtonCard
                              textCard = "comprar"
                              photo={ <img src={dat.photo}/>}
                              productName = {dat.productName}
                              descriptionShort={dat.descriptionShort}
                              price = {dat.price}
                              />

                          
                            
                              
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
 )
}

export default CardProduto;
