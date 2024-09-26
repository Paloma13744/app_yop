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
          <ListaItem index={0}></ListaItem>   {/* 10 slides em cada */}
          <ListaItem index={1}></ListaItem>
          <ListaItem index={2}></ListaItem>
          <ListaItem index={3}></ListaItem> 
          <ListaItem index={4}></ListaItem> 
          <ListaItem index={5}></ListaItem> 
          <ListaItem index={6}></ListaItem> 
          <ListaItem index={7}></ListaItem> 
          <ListaItem index={8}></ListaItem> 
          <ListaItem index={9}></ListaItem> 
          
     
        </div>
        <ArrowForwardIosOutlined className='sliderArrow direita' onClick={()=> handleClick('direita')} ></ArrowForwardIosOutlined>
      </div>
    </div>
  )
}
