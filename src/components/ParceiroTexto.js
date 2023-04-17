import React from 'react'
import '../styles/parceiros.scss';
export default function ParceiroTexto(props) {
  return (
    <div className='textoParceiros'>
    <h1>{props.texto}</h1>
  </div>
  )
}
