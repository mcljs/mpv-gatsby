import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../src/components/layout.css'
import { MainContent } from '../components/styles/base'
import Chartone from '../components/Charts/chart-one'
import CharTwo from '../components/Charts/chart-two'
import ChartThree from '../components/Charts/chart-three'
import ChartFour from '../components/Charts/chart-four'
import '../../src/components/estadistica.css'


const Estadisticas = () => (
    <Layout>
       
        <SEO title="Estadisticas" />
        <h1 className="estadisticas">Estadisticas</h1>
        
        <MainContent>
      


<h1>Estadisticas Del Movimiento Por La Paz Y La Vida</h1>

    <h3>Total de Beneficiarios Atendidas Abril</h3>
    <h4>64.879</h4>
<p>-------------------------------</p>
    <h3>Total de Actividades Realizadas Abril</h3>
    <h4>941</h4>






<div className="grafica">
<p>Poblacion Atendida por Grupo Etario Abril</p>
<Chartone/>
</div>

<div className="grafica">
<p>Actividades Realizadas Abril</p>
<CharTwo/>
</div>

<div className="grafica">
<p>Beneficiarios Atendido 2020</p>
<ChartThree/>

</div>

<div className="grafica">
<p>Distribución Atendido Indirectos e Indirectos 2020</p>
<ChartFour/>
</div>


  


        </MainContent>
       
    </Layout> 
)

export default Estadisticas