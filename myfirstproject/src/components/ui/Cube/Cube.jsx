import React from 'react'


export const Cube = ({text, styleclass}) => {
  return (
    <div className='card' >
        <img className='logos' src={styleclass} alt="" />
        <p className='text'>{text}</p>
    </div>
  )
}

