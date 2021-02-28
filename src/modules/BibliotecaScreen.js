import React,{useMemo} from 'react'
import {useParams,Redirect} from '@reach/router'
import {getBibliotecaById} from '../selector/getBibliotecaById'
import {IoMdDownload} from '@react-icons/all-files/io/IoMdDownload'
import styled from 'styled-components'
import Link from '../components/link'
import Layout from '../components/layout';
import '../components/layout.css'
const SEO = React.lazy(()=> import('../components/Seo'))

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








const BibliotecaScreenG = ({history}) => {
    
  const {bibliotecaId} = useParams();

  const biblioteca = useMemo(()=> getBibliotecaById(bibliotecaId),[bibliotecaId] );

  if(!biblioteca){
    return <Redirect to='/biblioteca/general'/>
  }

const isSSR = typeof window === "undefined"


  const {
    title,
    genero,
    fecha_p,
    n_paginas,
    encuadernacion,
    autor,
    description,
    descarga,
    image
  } = biblioteca
    
 


  return(
  <>
    <Layout>{!isSSR &&(
      <React.Suspense fallback={<div>Cargando...</div>}>
   <SEO title={title} />

      </React.Suspense>
      )}
    
 <MarcoLibro>
       <ParraUnico>
  <Ph1>{title}</Ph1>
          <Image width='300' height='480' src={image} alt={title}/>
    
          <div className="col-lg-14 col-md-14 col-sm-14 col-xs-24">
             <p><strong>Genero: </strong>{genero}</p>
            <p><strong>Fecha de publicación: </strong>{fecha_p}</p>
                    <p><strong>N° de páginas: </strong>{n_paginas}</p>
              <p> <strong>Encuadernación: </strong>{encuadernacion}</p>
 <p><strong>Autor: </strong>{autor}</p>
            <p style={{paddingRight: '10px'}}><strong>Descripción: </strong>{description}</p>
                   </div>
              <div className="row">
             <div className="col-lg-10 col-md-10 col-sm-10 col-xs-24">
                <ContainerTwo>
                   <LinkDescarga href={descarga}><Icons /> <span>Descargar pdf</span></LinkDescarga>
                </ContainerTwo>
          </div>
      
</div>

       </ParraUnico>
       
  
    </MarcoLibro>
    </Layout>
  </>
  );
}
export default BibliotecaScreenG
