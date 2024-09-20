import React from 'react'
import "./navbar.scss"
import logo from './yopflix.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='esquerda'>
                <img src= {logo} alt ="Logo da Yopflix"  ></img>
            </div>
            <span>Página Inicial</span>
            <span>Séries</span>
            <span>Filmes</span>
            <span>Filmes Populares</span>
            <span>Minha lista</span>

            <div className='direita'>

            </div>
        </div>
    
    </div>
  )
}

export default Navbar
