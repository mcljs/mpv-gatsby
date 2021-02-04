import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'

const Ejes = () => (
    <Layout>
       
        <SEO title="Biblioteca Digital" />
      <h1 className="biblioteca" style={{fontSize: '4.2rem',textAlign : 'center'}}>Biblioteca Digital</h1>
        
        <MainContent>

        </MainContent>
       
    </Layout> 
)

export default Ejes
