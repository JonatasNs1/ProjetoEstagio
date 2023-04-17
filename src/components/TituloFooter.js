import React from 'react'

export default function TituloFooter(props) {
  return (
    <div className='tituloInformacoesPagamentos'>
        <h3>
            {props.textTituloInformacao}
            {props.textTituloPagamento}
        </h3>
  </div>
  )
}
