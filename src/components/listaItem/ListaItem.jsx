import './listaItem.scss'
import img from './imagens/matriz_tela.png'
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import video from'./trailers/trailer_matriz.mp4';

export default function ListaItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
 

  return (
    <div
      className='listaItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt=''></img>
      {isHovered && (
        <>
         <video src={video} autoPlay={true} loop  width="100%" height="140px"></video>

          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' ></PlayArrow>
              <Add className='icon'></Add>
              <ThumbUpAltOutlined className='icon' ></ThumbUpAltOutlined>
              <ThumbDownOutlined className='icon'></ThumbDownOutlined>
            </div>
            <div className='itemInfoTop'>
              <span>2 horas 15 min</span>
              <span className='limite'>+13</span>
              <span>1999</span>
            </div>
            <div className='desc'>
              Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador
              de computador que mora em um cubículo escuro, é atormentado por estranhos
              pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em
              um imenso sistema de computadores do futuro.
            </div>
            <div className='genero'>Ficção científica</div>
          </div>
        </>
      )}

    </div>

  );
}
