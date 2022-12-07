import React from 'react'
import { Tittle } from '../../ui/Tittle/Tittle'
import { Logo } from '../../ui/Logo/Logo'
import { NavBar } from '../../ui/NavBar/NavBar'

export const Header = () => {
  return (
    <header className='HeaderPrincipal'>
        <Logo/>
        <Tittle />
        <NavBar/>
    </header>
  )
}
