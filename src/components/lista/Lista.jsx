import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './lista.scss'
import ListaItem from '../listaItem/ListaItem';
import { useRef, useState } from 'react';

export default function Lista() {
  const[isMoved,setIsMoved] = useState(false)
  const[slideNum,setSliderNum] = useState(0) // Criando quantidade de slides 

  const listRef = useRef();

  const handleClick = (direction) => {  // função que movimenta os quadrantes(filmes)
    setIsMoved(true);
    let distancia = listRef.current.getBoundingClientRect().x - 50
    if(direction === 'esquerda' && slideNum > 0){
      setSliderNum(slideNum - 1)
      listRef.current.style.transform = `translateX(${230 + distancia}px)`

    }
    if(direction === 'direita' && slideNum < 5){
      setSliderNum(slideNum + 1)
      listRef.current.style.transform = `translateX(${-230 + distancia}px)`

    }


    console.log(distancia)
  }


  return (
    <div className='lista'>
      <span className='tituloLista'>Continuar assistindo</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined className='sliderArrow esquerda' onClick={()=> handleClick('esquerda')}
        style={{display: !isMoved && "none"}} ></ArrowBackIosOutlined>  
        
        <div className='container' ref = {listRef}>
          <ListaItem></ListaItem>   {/* 10 slides em cada */}
          <ListaItem></ListaItem>
          <ListaItem></ListaItem>
          <ListaItem></ListaItem> 
          <ListaItem></ListaItem> 
          <ListaItem></ListaItem> 
          <ListaItem></ListaItem> 
          <ListaItem></ListaItem> 
          <ListaItem></ListaItem> 
          <ListaItem></ListaItem> 
          
     
        </div>
        <ArrowForwardIosOutlined className='sliderArrow direita' onClick={()=> handleClick('direita')} ></ArrowForwardIosOutlined>
      </div>
    </div>
  )
}
