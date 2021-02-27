import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'
import BibliotecaSeason from '../components/biblioteca/season';
import {BibliotecaData} from '../data/biblioteca'


const Ejes = () =>{




  return(
    <Layout>
       
        <SEO title="Biblioteca Digital" />
      <h1 className="biblioteca" style={{fontSize: '4.2rem',textAlign : 'center'}}>Biblioteca Digital</h1>


      <BibliotecaSeason  biblioteca={BibliotecaData}
        url="vivencia"
      seccion="Vivencias Paz y Vida"
      publisher="Vivencias Paz y Vida"
      articulo="0"/>

      <BibliotecaSeason css={{marginTop: '1.5rem'}} biblioteca={BibliotecaData}
      url="planes"
        seccion="Planes y Programas"
        publisher="Planes y Programas"
      articulo="2"/>
     
        <MainContent>

        </MainContent>
       
    </Layout> 
)}

export default Ejes
