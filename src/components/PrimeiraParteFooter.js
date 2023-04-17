import React from 'react'
import Visa from '../assets/visa.png';
import Elo from '../assets/elo.png';
import Alelo from '../assets/alelo.png';
import Dinners from '../assets/dinners.png';
import Ifood from '../assets/ifood.png';
import Mastercard from '../assets/mastercard.png';
import Pix from '../assets/pix.png';
import Amex from '../assets/amex.png';
import Ticket from '../assets/ticket.png';
import Sodexo from '../assets/sodexo.png';
import Facebook from '../assets/facebook.PNG';
import Instagram from '../assets/instagram.PNG';
import Youtube from '../assets/youtube.PNG';
import TextoFooter from './TextoFooter';
import TituloFooter from './TituloFooter';

export default function PrimeiraParteFooter() {
  return (
    <div className='primeiraParteFooter'>
    <div className='sobreNos'>
      <div className='tituloSobreNos'>
          <h3>Sobre nós</h3>
      </div>
     <div>
        <TextoFooter
        textConheça="conheça" 
        textComprar="como comprar"
        textIndicacao="indicacao e desconto"
        />
   
     </div>
       
      <div className='iconesRedeSociais'>
        <div className='iconesSociaisFace'>
          <img src={Facebook} alt="facebook"/>
        </div>
        <div className='iconesSociaisInsta'>
          <img src={Instagram} alt="facebook"/>
        </div>
        <div className='iconesSociaisYoutube'>
          <img src={Youtube} alt="facebook"/>
        </div>
       
      </div>        
    </div>
    <div className='informacoes'>
             <div>
              <TituloFooter
              textTituloInformacao = 'informações úteis'/>
             </div>
              <div className='opcoesParaCliente'>
              <div>
                <TextoFooter
                textFaleConosco = " fale conosco "
                textDuvida = "dúvidas"
                textPrazos = "prazos de entrega"
                textPagamento = "formas de formasPagamento "
                textPrivacidade = "politica de privacidade"
                textDevolucoes = "trocas e devoluções "
                />
              </div>
      </div>

    </div>
    <div className='formasPagamento'>
      <TituloFooter
      textTituloPagamento = "Formas de pagamento"
      />

        <div className='iconesPagamento'>
          <div className='imgPagamento'>
              <img src={Visa}/>
          </div>
          <div className='imgPagamento'>
              <img src={Elo}/>
          </div>
          <div className='imgPagamento'>
              <img src={Alelo}/>
          </div>
          <div className='imgPagamento'>
              <img src={Dinners}/>
          </div>
          <div className='imgPagamento'>
              <img src={Ifood}/>
          </div>
          <div className='imgPagamento'>
              <img src={Mastercard}/>
          </div>
          <div className='imgPagamento'>
              <img src={Pix}/>
          </div>
          <div className='imgPagamento'>
              <img src={Amex}/>
          </div>
          <div className='imgPagamento'>
              <img src={Ticket}/>
          </div>
          <div className='imgPagamento'>
              <img src={Sodexo}/>
          </div>
        </div>

    </div>

    <div className='cadastro'>
      <div className='tituloCadastro'>
          <h1 className='tituloCadastroReceba'>
          Cadastre-se e Receba nossas
         
          </h1>
          <h2>
            novidades e promoções
          </h2>
      </div>
      <div className='descricaoCadastro'>
            <div className='descricaoCadastroText'>
                <p>
                Excepteur sint occaecat cudatat non ent, sunt in
                </p>
                <p className='textoAfastado'>
                culpa qui officia lorem ipsum
                </p>
            </div>
      </div>
      <div className='campoCadastro'>
          <input className='campoCadastroInput' placeholder="Seu e-mail"/>
          <button className='campoCadastroButton'>ok</button>
      </div>
    </div>
  </div>
  )
}
