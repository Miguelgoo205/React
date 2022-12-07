import React from 'react'
import logotipo from "../../../images/logo.jpg"

export const Logo= ({nameCompany}) => {
  return (
    <div className='contLogo'>
      <img onClick={alerta} className="Logotype" src={logotipo} alt="Logo-company" />
      <p>{nameCompany}</p>
    </div>
  )
}

function alerta(params) {
  alert('sirveee')
}
