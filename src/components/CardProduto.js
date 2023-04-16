import '../css/styles.css';
import axios from 'axios';
import React, { useEffect,useState,  useRef} from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


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
                              <button >Comprar</button>
                              
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
 )
}

export default CardProduto;
