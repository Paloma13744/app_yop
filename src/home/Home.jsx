// Página inicial do site

import React from 'react'
import './home.scss'
import { AcUnit } from '@material-ui/icons' // Importação de uma logo
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'


const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>   
      <Featured></Featured>

    </div>
  )
}

export default Home
