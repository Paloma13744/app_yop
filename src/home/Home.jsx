// Página inicial do site

import React from 'react'
import './home.scss'
import { AcUnit } from '@material-ui/icons' // Importação de uma logo
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
       <Navbar></Navbar>
    </div>
  )
}

export default Home
