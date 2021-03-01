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
        <p><strong>Conoce mas de nuestras instalaciones y se parte del Movimiento por la Paz y la Vida. </strong></p>
      </MainContent>

      {
        dataBasePazAnzoategui.map( base => (
          <Accordion key={base.id} title={base.title}
            content={
              `<p><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
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
              `<p className="inactivo"><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura4}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador4}.</p>
        </br>

    <p><strong>${base.base5}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion5}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href5}'  target='_blank' rel='noreferrer'>${base.coordenadas5}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura5}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura4}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura4}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador4}.</p>
        </br>

    <p><strong>${base.base5}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion5}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href5}'  target='_blank' rel='noreferrer'>${base.coordenadas5}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura5}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador5}.</p>
        </br>

    <p><h6>(Inactiva)</h6> <strong>${base.base6} </strong></p>
        <p><strong>Dirección: </strong>${base.direccion6}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href6}'  target='_blank' rel='noreferrer'>${base.coordenadas6}</a></p>
         

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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

               `}
          />
        ) )
      }

     <Accordion title="LA GUAIRA"
            content={`
       <p><h6>(Inactiva)</h6> <strong>GRAN BASE DE MISIONES PAZ "MAMO" </strong></p>
        <p><strong>Dirección: </strong>Municipio Vargas. Parroquia Catia la Mar, Barrio Mari Apaches</p>
            <p><strong>Coordenadas ID: </strong><a href=''  target='_blank' rel='noreferrer'>10.591058559791708, -67.05556387381132</a></p>
</br>

  <p><h6>(Inactiva)</h6> <strong>GRAN BASE DE MISIONES DE PAZ "MARE ABAJO" </strong></p>
        <p><strong>Dirección: </strong>Municipio Vargas. Parroquia Maiquetia, Sector Mare Abajo</p>
            <p><strong>Coordenadas ID: </strong><a href=''  target='_blank' rel='noreferrer'>10.606946139331056, -66.97700658915689</a></p>
</br>

  <p><h6>(Inactiva)</h6> <strong>GRAN BASE DE MISIONES DE PAZ "PUNTA DE MULATOS" </strong></p>
        <p><strong>Dirección: </strong>Municipio Vargas. Parroquia La Guaira, Sector Punta de Mulatos</p>
            <p><strong>Coordenadas ID: </strong><a href=''  target='_blank' rel='noreferrer'>10.602423031838562, -66.92703070270817</a></p>
</br>

               `}
          />



{
        dataBasePazMerida.map( base => (
          <Accordion key={base.id} title={base.title}
            content={
              `<p><strong>${base.base}</strong></p>
            <p><strong>Dirección: </strong>${base.direccion}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura4}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
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
            <p><strong>Coordenadas ID: </strong><a href='${base.href}'  target='_blank' rel='noreferrer'>${base.coordenadas}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador}.</p>
            </br>

      <p><strong>${base.base2}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion2}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href2}'  target='_blank' rel='noreferrer'>${base.coordenadas2}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura2}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador2}.</p>
        </br>

      <p><strong>${base.base3}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion3}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href3}'  target='_blank' rel='noreferrer'>${base.coordenadas3}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura3}.</p>
            <p><strong>Coordinador(a): </strong>${base.coordinador3}.</p>
        </br>

    <p><strong>${base.base4}</strong></p>
        <p><strong>Dirección: </strong>${base.direccion4}</p>
            <p><strong>Coordenadas ID: </strong><a href='${base.href4}'  target='_blank' rel='noreferrer'>${base.coordenadas4}</a></p>
            <p><strong>Servicios que ofrece: </strong>${base.estructura4}.</p>
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
