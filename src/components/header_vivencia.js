import React from 'react';

import styled from 'styled-components';

import './image.css'
import Image from '../bibliotecaImage/img-2.svg'

const HeaderVivencia = () =>{


  return(
  <EmailContainer>
    <EmailContent>
      <h1>Vivencias Paz y Vida</h1>
      <p>Contenido descargable de nuestra biblioteca. Todos libres de ver.</p>
    

    </EmailContent>
   <HeroImage src={Image} alt={Image} />
    </EmailContainer>
)
}
export default HeaderVivencia


const HeroImage = styled.img`
position: absolute;
margin-left: 400px;
margin-top: 0px;
width: 380px;
    height: 336px;
 @media screen and (max-width: 768px){
 position: absolute;
 margin-left: -16px;
 margin-top: -90px;
 visibility: hidden;
 width: 100px;
              } 

`;


const EmailContainer = styled.div`
  background: #e42f30;
      background-size: cover;
      height: 450px;
      width: 100%;
      padding: 5rem calc((100vw - 1300px) /2);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
  @media screen and (max-width: 768px){

 margin-top: 20px;
              }  

`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;

    margin-right: 10rem;
    font-size: clamp(3rem, 5vw, 3rem);
    padding: 0 1rem;
  @media screen and (max-width: 768px){
              text-align: center;
              margin-right: 70px;
              }
          
              @media screen and (max-width: 400px){
                 text-align: center;
              }
  }
  p{
  display: block;
  padding-bottom: 10px;
    max-width: 400px;
    margin-top: 0.775rem;
    margin-right: 12rem;
    font-size: 1.5rem;
@media screen and (max-width: 768px){
               text-align: center;
              margin-right: 70px;
              }
          
      
  }
  form{
    z-index: 10;
  }

@media screen and (max-width: 768px){
margin-top: 60px;
padding-left: 45px;
              }
          


`

