import React from "react";
import Layout from '../../../components/layout';
import SEO from '../../../components/Seo';
import '../../../../src/components/layout.css'
//import BibliotecaList from '../../components/biblioteca/list'
//import {BibliotecaData} from '../../components/biblioteca/BibliotecaData'

import styled from 'styled-components'
import Image1 from '../../../bibliotecaImage/libro-azul.jpg'
import {IoMdDownload} from '@react-icons/all-files/io/IoMdDownload'
import Link from '../../../components/link'

const Icons = styled(IoMdDownload)`
color: #e41e25;

`
 const LinkDescarga = styled(Link)`
text-decoration: none;
    &:hover {
        color: #141414;
        text-decoration: none;
        transition: all 0.2s ease;
    }
`

const MarcoLibro = styled.section`
   border: 1px solid #dddddd;
    border-radius: 6px;
    display: inline-block;
    width: 90%;
    margin: 20px;
    margin-top: 60px;

`
const ParraUnico = styled.div`
padding: 40px 40px;
@media (min-width: 779px) and (max-width: 1008px){
padding: 40px 40px;
}
`
const Ph1 = styled.h1`
font-family: inherit;
    font-weight: 500;
    line-height: 1.35;
    color: #e41e25;
margin-top: 40px;
    margin-bottom: 40px;
    font-size: 50px;
`

const Image = styled.img`
   border: 1px solid #ccc;
    float: right;
    margin: 10px;
    padding: 10px;
   display: block;
   max-width: 100%;
    height: auto;
  margin-bottom: 40px;

`
const ContainerTwo = styled.div`
    float: right;
    margin: 10px;
    padding: 15px 45px;
    display: flex;
    text-align: right;
    background:rgba(255,255,255,0.9)0%;
    border-left: 1px solid #e41e25;
    width: 90%;
   

`
const LibroAzul = () => (
    <>
 <Layout>
       
        <SEO title="El Libro Azul" />
        
    <MarcoLibro>
       <ParraUnico>
  <Ph1>El Libro Azul</Ph1>
          <Image width='300' height='480' src={Image1} alt={Image1}/>
    
          <div className="col-lg-14 col-md-14 col-sm-14 col-xs-24">
             <p><strong>Genero: </strong>Biografica</p>
            <p><strong>Fecha de publicación: </strong>2007</p>
                    <p><strong>N° de páginas: </strong>127</p>
              <p> <strong>Encuadernación: </strong>Tapa blanda</p>
 <p><strong>Autor: </strong>Hugo Chávez</p>
            <p style={{paddingRight: '10px'}}><strong>Descripción: </strong>El libro azul es un libro de mandatos y profecías, la raíz primigenia del Proyecto Bolivariano que está en desarrollo en Venezuela. Todo patriota venezolano debe conocer este libro, aquí está proyectado el futuro del siglo XXI", dice en el prólogo Nicolás Maduro. Un libro fundamental para entender el movimiento chavista desde el proyecto del propio Chávez.</p>
                   </div>
              <div className="row">
             <div className="col-lg-10 col-md-10 col-sm-10 col-xs-24">
                <ContainerTwo>
                   <LinkDescarga href={"http://www.minpi.gob.ve/assets/pdf/arc_Libro_Azul.pdf"}><Icons /> <span>Descargar pdf</span></LinkDescarga>
                </ContainerTwo>
          </div>
      
</div>

       </ParraUnico>
       
  
    </MarcoLibro>

       
    </Layout> 

</>
)

export default LibroAzul
