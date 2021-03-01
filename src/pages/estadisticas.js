import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'
import Chartone from '../components/Charts/chart-one'
import CharTwo from '../components/Charts/chart-two'
//import ChartThree from '../components/Charts/chart-three'
import ChartFour from '../components/Charts/chart-four'
import '../../src/components/estadistica.css'


const Estadisticas = () => (
    <Layout>
       
        <SEO title="Estadisticas" />
        <h1 className="estadisticas animate__fadeIn" style={{fontSize: '3.4rem'}}>Estadisticas</h1>
        
        <MainContent>
      


<h1>Estadisticas del Movimiento por la Paz y la Vida</h1>

          <h3>Total Actividades Planificadas 2021:</h3>
   <h4>962</h4>
          <h1>------------</h1>






<div className="grafica">
<p>Balance Actividades Planificada por Mes</p>
<Chartone/>
</div>

<div className="grafica">
<p>Actividades Planificadas Enero - Febrero</p>
<CharTwo/>
</div>

<div className="grafica">
<p>% de Actividades Planificada Enero - Febrero 2021 por Vértice</p>
<ChartFour/>
</div>


  


        </MainContent>
       
    </Layout> 
)

export default Estadisticas
