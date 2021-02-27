import React, {useMemo} from 'react'
import {useParams,Redirect} from '@reach/router'
import {getBibliotecaById} from '../../selector/getBibliotecaById'
import styled from 'styled-components';
import { Button } from '../Button';
import {RiCameraLensFill } from 'react-icons/ri';


const BookCard = ({Book}) => {
   


   const {bibliotecaId} = useParams();

  const biblioteca = useMemo(()=> getBibliotecaById(bibliotecaId),[bibliotecaId] );

  if(!biblioteca){
    return <Redirect to='/biblioteca/general'/>
  }

 
    return(
      
 <ProductsContainer>
        <ProductsHeading>Contenido al Publico</ProductsHeading>
   {Book.map((biblioteca)=>(

 <ProductWrapper>
  <ProductCard>
        <ProductImg
          
          src={biblioteca.image}
          alt={biblioteca.title} />
        <ProductInfo>
          <TextWrap>
            <RiCameraLensFill />
          <ProductTitle>{biblioteca.title}</ProductTitle>
          </TextWrap>
          <Button href={biblioteca.descarga} 
          round="true" 
          css={`
            position: absolute;
            top: 420px;
            font-size: 14px;
          `}
          
          >
          Descargar</Button>
        </ProductInfo>
      </ProductCard>


   </ProductWrapper>

   ))}
        </ProductsContainer>    
    );
}
export default BookCard

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px)/2);
  background: #fff;
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(4,1fr);
 grid-gap: 10px;
 justify-items: center;
 padding: 0 2rem;
   grid-template-columns: 1fr 1fr;
 @media screen and (max-width: 1200px){
   grid-template-columns: 1fr 1fr;
 }
 @media screen and (max-width: 868px){
   grid-template-columns: 1fr;
 }
`
const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
transition: 0.2s ease;
`

const ProductImg = styled.img`
height: 100%;
max-width: 100%;
position: absolute;
border-radius: 10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
&:hover{
  filter: brightness(100%)
}
`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;
@media screen and(max-width: 280px){
  padding: 0 1rem;
}
`
const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 375px;
`

const ProductTitle = styled.div`
font-weight: 400;
font-size: 1rem;
margin-left: 0.5rem  
`

