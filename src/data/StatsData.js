import React from 'react';
import {FaBuilding} from '@react-icons/all-files/fa/FaBuilding';
import {CgGym} from '@react-icons/all-files/cg/CgGym';
import {FaChessKnight} from '@react-icons/all-files/fa/FaChessKnight';
import {FaChild} from '@react-icons/all-files/fa/FaChild';



export const StatsData = [
  {
    icon: (<FaBuilding css={`
      color #b9161c;
      `}/>),
    title: "Gran Base de Paz",
    desc: "Instalacion con calidad para la practica de actividades deportivas, recreativas y culturales.",
  },
{
    icon: (<CgGym css={`
      color #cd1b01;
      `}/>),
    title: "Gimnasio",
    desc: "Con equipos de ultima generacion para la masificación del deporte.",
  },
{
    icon: (<FaChessKnight css={`
      color #b6181d;
      `}/>),
    title: "Infocentro",
    desc: "Bibliotecas, centro de juegos de mesas para nuestra Juventud.",
  },
{
    icon: (<FaChild css={`
      color #5b0c0e;
      `}/>),
    title: "Parque Recreativo",
    desc: "Para el disfrute de nuestros pequeños de la casa.",
  },
]
