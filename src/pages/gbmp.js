import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css';
import { MainContent } from '../components/styles/base';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from '../components/Accordion/Acoordion';
//import {Table} from 'react-bootstrap';
import {
  dataBasePazAnzoategui,
  dataBasePazAragua,
  dataBasePazCarabobo,
  } from '../data/basedepaz'
const Privacy = () => {



  return(
    <Layout>
       
        <SEO title="Grandes Bases de Misiones de Paz" />
      <h1 className="privacy" style={{fontSize: '4.2rem',textAlign: 'center'}}>Grandes Bases</h1>
      <MainContent>
  <p>Para saber de nuestra ubicación especifica ingresa al Link que se encuentra en <strong>"COORDENADAS UTM"</strong> de la Base de tu preferencia.</p>
      </MainContent>

      {
        dataBasePazAnzoategui.map( base => (
          <Accordion key={base.id} title={base.title}
            content={
              `<p><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>
            `}
          />
        ) )
      }
 

     {
        dataBasePazAragua.map( base => (
          <Accordion key={base.id} title={base.title}
            content={
              `<p><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura4}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador4}.</p>
        </br>

    <p><strong>${base.base5}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion5}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href5}'  target='_blank' rel='noreferrer'>${base.coordenadas5}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura5}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador5}.</p>
        </br>

            `}
          />
        ) )
      }


   {
        dataBasePazCarabobo.map( base => (
          <Accordion key={base.id} title={base.title}
            content={
              `<p><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura4}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador4}.</p>
        </br>
             `}
          />
        ) )
      }
    </Layout> 
        
)
        }

export default Privacy
