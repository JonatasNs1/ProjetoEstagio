import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
export default function ButtonCard(props) {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='buttonCardCelulares'>
        <button onClick={() =>setOpenModal(true)}>{props.textCard}</button>
                  {openModal ? <Modal onClose={() => setOpenModal(false)}>
                <div className='principalModal'>
                <div className='imagemModal'>
                  {props.photo}
                 </div>
                  <div className='todosItens'>
                      <div className='nomeCardModal'>
                        <h1>{props.productName}</h1>
                      </div>
                      <div className='precoCardModal'>
                        <p> R${props.price} </p>
                      </div>
                      <div className='descricaoCardModal'>
                          <p> {props.descriptionShort}</p>
                      
                      </div>
                      <div className='vejaMaisCardModal'>
                          <p>Veja mais detalhes do produtos{">"}</p>
                      </div>
                  </div>
                </div>
                    </Modal>: null}
                              
    </div>
  )
}
