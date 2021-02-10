import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'
import Muchachada from '../components/Programas/Muchachada';
const Ejes = () => (
    <Layout>
       
        <SEO title="Ejes de Acción" />
      <h1 className="ejes" style={{fontSize: '4.2rem',textAlign : 'center'}}>Ejes de Acción</h1>

      <Muchachada />
        <MainContent>

        </MainContent>
       
    </Layout> 
)

export default Ejes
