import React from 'react'
import styled from 'styled-components';
import { GatsbyImage} from "gatsby-plugin-image"
import {FaRegLightbulb} from 'react-icons/fa';
import {IoMdCheckmarkCircleOutline  } from 'react-icons/io';
import {graphql, useStaticQuery} from 'gatsby';


const Muchachada = () =>{
  const data = useStaticQuery(graphql`
  query {
  allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
    name: {in: ["muchachada-1","muchachada-2","muchachada"]}}) {
    edges {
      node {
        childImageSharp {
           gatsbyImageData(height:400)
        }
      }
    }
  }
}
  `)
  return(
    <TestimonialsContainer>
      <TopLine>
        Plan 89 en Victoria
      </TopLine>
      <Description>
       MUCHACHADA POR LA PAZ Y LA VIDA
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline  css={`
          color: #3fffa8; 
          font-size:2rem; 
          margin-bottom: 1rem
          `} />
            <h3>Dirigido a los jóvenes de 13 a 24 años de edad</h3>
            <p>Para dar respuesta a sus necesidades y ayudar a la construcción, desarrollo y/o concreción de sus PROYECTOS DE VIDA fundamentados en doctrinas y estrategias de Paz en el marco del Socialismo del siglo XXI. Dicho proceso se orientará a través de actividades formativas, recreativas, deportivas y culturales enmarcadas en los valores sociales, permitiendo así la creación de una gran estructura nacional a partir de células organizadas en parroquias, ciudades o estados a lo largo y ancho de la geografía nacional.</p>
          </Testimonial>
        <Testimonial>
          <FaRegLightbulb css={`
          color: #f9b19b; 
          font-size:2rem; 
          margin-bottom: 1rem
          `} 
          />
            <h3>Busca generar de forma orgánica la participación y el intercambio social bajo una perspectiva integral que tribute a la formación del hombre y la mujer</h3>
            <p>Hoy gracias a la llegada de la Revolución Bolivariana, se han establecido una serie de prácticas sociales forjadas a partir de Valores tanto individuales como colectivos que sin duda alguna han contribuido a fortalecer la estructura social de la nación y así mismo la construcción de un futuro de paz basados en principios como la unidad, la solidaridad y la cooperación. </p>
          </Testimonial>

        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image,key) =>(

              <Images key={key} image={image.node.childImageSharp.gatsbyImageData}/>   
          ))}
      
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
)
}
export default Muchachada


const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`


const Description = styled.div`
  text-align: strat;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
 grid-template-rows: 1fr fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  @media screen and(max-width: 500px){
    grid-template-columns: 1fr;
  }
`
const Images = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`
