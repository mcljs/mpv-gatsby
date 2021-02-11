import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'
import BibliotecaSeason from '../components/biblioteca/season';
import {BibliotecaData} from '../components/biblioteca/BibliotecaData'

const Ejes = () =>{




  return(
    <Layout>
       
        <SEO title="Biblioteca Digital" />
      <h1 className="biblioteca" style={{fontSize: '4.2rem',textAlign : 'center'}}>Biblioteca Digital</h1>
      <BibliotecaSeason biblioteca={BibliotecaData}/>
     
        <MainContent>

        </MainContent>
       
    </Layout> 
)}

export default Ejes
