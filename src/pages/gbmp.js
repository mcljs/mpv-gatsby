import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../src/components/layout.css';
import { MainContent } from '../components/styles/base';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
const Privacy = () => (
    <Layout>
       
        <SEO title="Grandes Bases de Misiones de Paz" />
        <h1 className="privacy">Grandes Bases</h1>
        
        <MainContent>
            <h1 >GRANDE BASES DE MISIONES A NIVEL NACIONAL</h1>
            
            <p>Para saber de nuestra ubicación especifica ingresa al Link que se encuentra en <strong>"COORDENADAS UTM"</strong> de la Base de tu preferencia.</p>
        <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th >REGION</th>
      <th>ESTADO</th>
      <th>N°</th>
      <th>DIRECCIÓN EXÁCTA</th>
      <th>GBMP</th>
      <th>COORDENADAS UTM</th>
      <th>DIRECTOR(A)</th>
      <th>COORDINADOR(A)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="14"><a>CENTRAL</a></td>
      <td rowSpan="6"><a>DTTO.CAPITAL</a></td>
      <td><a>1</a></td>
      <td><a>MUNICIPIO LIBERTADOR, PARROQUIA EL VALLE, AVENIDA INTERCOMUNAL DE EL VALLE</a></td>
      <td><a>EL VALLE</a></td>
      <td ><a href="https://n9.cl/4bo9" target="_blank">10°28'23.90"N  66°53'55.24"W</a></td>
      <td rowSpan="6"><a>WENDY DEL VALLE</a></td>
      <td><a>ARMANDO OLIVER</a></td>
    </tr>
    <tr>
      <td><a>2</a></td>
      <td><a>"MUNICIPIO LIBERTADOR, PARROQUIA ANTONIO PINTO SALINAS, CALLE REAL SIMÓN RODRÍGUEZ,  BLOQUE 7 Y 8
"</a></td>
      <td><a>PINTO SALINAS</a></td>
      <td ><a href="https://n9.cl/z4cz" target="_blank"> 10°30'40.22"N  66°53'25.13"W</a></td>
      <td><a>DUSMARY BORGES</a></td>
    </tr>
    <tr>
    <td><a>3</a></td>
      <td><a>MUNICIPIO LIBERTADOR, PARROQUIA CARICUAO, VIA CURPA AD4, ENTRE BLOQUES 39,40 Y EL CDI RAFAEL RANGEL</a></td>
      <td><a>QUINTA CRESPO</a></td>
      <td ><a href="https://n9.cl/t0q2" target="_blank">  10°29'38.79"N  66°55'6.73"W</a></td>
      <td><a>JESUS DIAZ</a></td>
    </tr>
    <tr>
    <td><a>4</a></td>
      <td><a>MUNICIPIO LIBERTADOR, PARROQUIA SUCRE FRENTE A LA AUTOPISTA CARACAS- LA GUAIRA, CALLE PANAMERICANA, FRENTE AL CDI Y SRI LOS FLORES DE CATIA</a></td>
      <td><a>CATIA</a></td>
      <td ><a href="https://n9.cl/ixr4" target="_blank"> 10°29'38.79"N  66°55'6.73"W</a></td>
      <td><a>YANETH CASTILLO</a></td>
    </tr>
    <tr>
    <td><a>5</a></td>
    <td><a>MUNICIPIO LIBERTADOR, PARROQUIA CARICUAO, VIA CURPA AD4, ENTRE BLOQUES 39,40 Y EL CDI RAFAEL RANGEL</a></td>
      <td><a>CARICUAO</a></td>
      <td ><a href="https://n9.cl/xug3" target="_blank">  10°25'42.29"N  66°58'35.62"W</a></td>
      <td><a>ERICKMAR RODRIGUEZ</a></td>
    </tr>
    <tr>
    <td><a>6</a></td>
      <td><a>MUNICIPIO LIBERTADOR, PARROQUIA LA VEGA, AV. GUZMÁN BLANCO CON CALLE 7 DE SEPTIEMBRE, DETRÁS DEL INSTITUTO NACIONAL DEL DEPORTE.</a></td>
      <td><a>LA VEGA</a></td>
      <td ><a href="https://n9.cl/u0pw" target="_blank">  10°28'26.55"N  66°56'43.15"W</a></td>
      <td><a> </a></td>
    </tr>
    <tr>
    <td rowSpan="3"><a>LA GUAIRA</a></td>
      <td><a>1</a></td>
      <td><a>MUNICIPIO VARGAS, PARROQUIA URIMARE AV. BICENTENARIO CON CALLE JOSÉ MARÍA VARGAS. DETRÁS DEL AEROPUERTO DE MAIQUETÍA
</a></td>
      <td><a>MARE BAJO</a></td>
      <td ><a href="https://n9.cl/xr2ki" target="_blank">10°28'23.90"N  66°53'55.24"W</a></td>
      <td rowSpan="3"><a>GABRIEL SAYEGH</a></td>
      <td><a> </a></td>
    </tr>
    <tr>
      
    <td><a>2</a></td>
      <td><a>MUNICIPIO VARGAS, PARROQUIA LA GUAIRA AVENIDA CARLOS SOUBLETTE, EN  FRENTE DE LA U.E PANAMÁ</a></td>
      <td><a>PUNTA DE MULATOS</a></td>
      <td ><a href="https://n9.cl/3rdat" target="_blank">   10°36'8.23"N  66°55'37.41"W</a></td>
      <td><a> </a></td>
    </tr>
    <tr>
    <td><a>3</a></td>
      <td><a>MUNICIPIO VARGAS, PARROQUIA CATIA LA MAR, CALLE PRINCIPAL DE MAMO, FRENTE AL CLUB DE MAMO</a></td>
      <td><a>MAMO</a></td>
      <td ><a href="https://n9.cl/gto0" target="_blank"> 10°35'26.73"N  67° 3'19.86"W</a></td>
      <td><a> </a></td>
    </tr>
  </tbody>
</Table>
        </MainContent> 
    </Layout> 
)

export default Privacy