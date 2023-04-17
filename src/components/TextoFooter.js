import React from 'react'

export default function TextoFooter(props) {
  return (
    <div className='opcoesParaCliente'>
    <p>
      {props.textConheça}<th/>
      {props.textComprar}<th/>
    {  props.textIndicacao}
    {props.textFaleConosco }<th/>
    {props.textDuvida} <th/>
    {props.textPrazos} <th/>
    {props.textPagamento} <th/>
    {props.textPrivacidade} <th/>
    {props.textDevolucoes}
      
    </p>
</div>
  )
}
