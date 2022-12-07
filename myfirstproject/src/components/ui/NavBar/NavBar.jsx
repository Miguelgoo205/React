import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
            <li><Link className='Ancla1' to="/" rel="stylesheet" href="" > Home</Link> </li>
            <li><Link className='Ancla1' to="/ContactUs" rel="stylesheet" href="" > Contact Us </Link></li>
            <li><Link className='Ancla1' to="/" rel="stylesheet" href="" > About Us </Link></li>
        </ul>
    </nav>
    
  )
}
