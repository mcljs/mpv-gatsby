import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import '../../src/components/layout.css';
import { MainContent } from '../components/styles/base';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from '../components/Accordion/Acoordion';
//import {Table} from 'react-bootstrap';
import Hero from '../components/Hero/Hero';
import {SliderData} from '../components/Hero/SliderData';
import {
  dataBasePazAnzoategui,
  dataBasePazAragua,
  dataBasePazCarabobo,
  dataBasePazDistritoCapital,
  dataBasePazFalcon,
  dataBasePazMerida,
  dataBasePazMiranda,
  dataBasePazMonagas,
  dataBasePazNuevaEsparta,
  dataBasePazSucre,
  dataBasePazTrujillo,
  dataBasePazZulia
  } from '../data/basedepaz'
const Privacy = () => {



  return(
    <Layout>
        <SEO title="Grandes Bases de Misiones de Paz" />
      <Hero slides={SliderData}/>
      <MainContent>
  <p>Para saber de nuestra ubicación ingresa al Estado donde te ubicas conseguiras <strong>"COORDENADAS"</strong>  que te dirigen a Google Maps de la Base de tu preferencia.</p>
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



{
        dataBasePazDistritoCapital.map( base => (
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
        dataBasePazFalcon.map( base => (
          <Accordion key={base.id} title={base.title}
            content={
              `<p><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrecen: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

               `}
          />
        ) )
      }


{
        dataBasePazMerida.map( base => (
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
            `}
          />
        ) )
      }



   {
        dataBasePazMiranda.map( base => (
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

{
        dataBasePazMonagas.map( base => (
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
            `}
          />
        ) )
      }

   {
        dataBasePazNuevaEsparta.map( base => (
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
        dataBasePazSucre.map( base => (
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
        dataBasePazTrujillo.map( base => (
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
        dataBasePazZulia.map( base => (
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
