import React from 'react'
import '../styles/cardsProduto.scss';
export default function NomeCard(props) {
  return (
    <div className='nomeCardCelulares'>
    <p> {props.productName}</p>
  </div>
  )
}
