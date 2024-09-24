import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './lista.scss'
import ListaItem from '../listaItem/ListaItem';

export default function Lista() {
  return (
    <div className='lista'>
      <span className='tituloLista'>Continuar assistindo</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined className='sliderArrow esquerda'></ArrowBackIosOutlined>  
        <div className='container'>
          <ListaItem></ListaItem>
          <ListaItem></ListaItem>
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
        <ArrowForwardIosOutlined className='sliderArrow direita'></ArrowForwardIosOutlined>
      </div>
    </div>
  )
}
