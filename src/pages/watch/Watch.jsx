import React from 'react'
import "./watch.scss"
import {ArrowBackOutlined} from '@material-ui/icons'

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined></ArrowBackOutlined>
        Home
      </div>
      
      <video className='video' autoPlay progress controls src='https://archive.org/download/httpsyopflix.com/matriz_filme.mp4'></video>
    </div>
  )
}
