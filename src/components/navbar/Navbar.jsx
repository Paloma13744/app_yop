import React, { useState } from 'react'
import "./navbar.scss"
import logo from './yopflix.png'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () =>  {
  const[isScrolled , setIsScrolled] = useState(false); // Scrool da tela  (topo , estado inicial)

  window.onscroll = () =>{   // função para rolagem do scrool
    setIsScrolled(window.scrollY == 0 ? false : true);
    return() =>  (window.onscroll = null)
  };

  return (
    <div className= {isScrolled ? 'navbar scrolled':'navbar'}>
        <div className='container'>
            <div className='esquerda'>
                <img src= {logo} alt ="Logo da Yopflix"  ></img>
            </div>
            <span>Home</span>
            <span>Séries</span>
            <span>Filmes</span>
            <span>Filmes Populares</span>
            <span>Minha lista</span>

            <div className='direita'>
              <Search className='icon'></Search>
              <span>KID</span>
              <Notifications className='icon'></Notifications> 
              {/* Imagem de perfil */}
              <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''></img>

              <div className="profile">
               <ArrowDropDown className='icon'></ArrowDropDown>
               <div className="options">      {/* Mini menu de opçoes para o usuário*/}
                <span>Configurações</span>
                <span>Sair</span>

               </div>
              </div>

            

            </div>
        </div>
    
    </div>
  )
}

export default Navbar
