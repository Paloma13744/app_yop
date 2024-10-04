// Página inicial do site

import React from 'react'
import './home.scss'
import { AcUnit } from '@material-ui/icons' // Importação de uma logo
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import Lista from '../../components/lista/Lista'


const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>   
      <Featured></Featured>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
    


    </div>
  )
};

export default Home
