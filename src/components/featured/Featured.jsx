import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from './featured.scss'
import logo2 from './home.jpeg'
import matrizlogo from './matriz.png'

export default function Featured({ type }) {
  return (
    <div className='featured'>
      {type && (
        <div className='categoria'>
          <span>{type === "filme" ? "Filmes" : "Séries"}</span>
          <select name='genero' id = 'genero'>
            <option value="Ação">Ação</option>
            <option value="Animação">Animação</option>
            <option value="Aventura">Aventura</option>
            <option value="Comédia">Comédia</option>
            <option value="Crime">Crime</option>
            <option value="Documentário">Documentário </option>
            <option value="Drama">Drama</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
           
          
          </select>
         
        </div>
      )

      }
      <img src={logo2} alt="Home"  ></img>

      <div className='info'>
        <img src={matrizlogo} alt=''></img>

        <span className='desc'>

          O filme Matrix (1999) é uma obra de ficção científica que se passa em um futuro distópico,
          onde a humanidade é controlada por máquinas através de uma simulação chamada "a matriz".
          O protagonista, Neo, um programador de computador, descobre a verdade sobre essa realidade
          e é recrutado por um grupo de rebeldes para lutar contra as máquinas. Ao ser identificado
          como "O Escolhido", ele desenvolve habilidades especiais para desafiar as regras da simulação.
          Neo enfrenta o Agente Smith, um programa destinado a manter o controle da matriz, e, no final,
          consegue derrotá-lo, abrindo caminho para a libertação da humanidade.
        </span>

        <div className='botoes'>
          <button className='play'>
            <PlayArrow></PlayArrow>
            <span>Play</span>
          </button>

          <button className='more'>
            <InfoOutlined></InfoOutlined>
            <span>Info</span>
          </button>


        </div>
      </div>
    </div>

  );
}
