import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'
import BibliotecaSeason from '../components/biblioteca/season';
import {BibliotecaData} from '../components/biblioteca/BibliotecaData'
import {BibliotecaDataVivencia} from '../components/biblioteca/BibliotecaDataVivencia'

const Ejes = () =>{




  return(
    <Layout>
       
        <SEO title="Biblioteca Digital" />
      <h1 className="biblioteca" style={{fontSize: '4.2rem',textAlign : 'center'}}>Biblioteca Digital</h1>

      <BibliotecaSeason  biblioteca={BibliotecaDataVivencia}
      seccion="Vivencia Paz y Vida"
      articulo="0"/>

      <BibliotecaSeason css={{marginTop: '1.5rem'}} biblioteca={BibliotecaData}
        seccion="Planes y Programas"
      articulo="1"/>
     
        <MainContent>

        </MainContent>
       
    </Layout> 
)}

export default Ejes
