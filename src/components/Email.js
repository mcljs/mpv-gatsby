import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import EmailBg from '../images/img-1.jpeg';
import {Button} from './Button';
import './image.css'

const Email = () =>{

const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { result, msg } = await addToMailchimp(email);
    result === 'success' && setEmail('');
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split('<')[0]);
    setStatus(result);
  };

  const handleChange = event => setEmail(event.target.value);

  return(
  <EmailContainer>
    <EmailContent>
      <h1>Suscribete al Boletin informativo del Movimiento</h1>
      <p>Mantenten al dia con nuestras noticias y publicaciones nuevas!</p>
      <form action="#">
        <FormWrap>
          <label htmlFor="email">
            <input 
            type="email"
            value={email}
            placeholder="Ingresa tu correo electronico" 
            id="email"
            onChange={handleChange}/>
    <span
          status={status}
          className={
            status === 'success'
              ? 'subscribe-form__message_success'
              : 'subscribe-form__message_failure'
          }
        >
          {message}
    </span>
          </label>
          <Button
          onClick={handleSubmit}
            as="button" 
            type="submit" 
            round="true" 
            css={`
              height: 48px;
              @media screen and (max-width: 768px){
                width: 100%;
                min-width: 350px;
              }
          
              @media screen and (max-width: 400px){
                width: 100%;
                min-width: 250px;
              }
          `}>Suscribirse</Button>
        </FormWrap>
      </form>
    </EmailContent>
    </EmailContainer>
)
}
export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0,0,0,0.5) 20%,
      rgba(0,0,0,0.6) 85%,
      rgba(0,0,0,0.1) 100%
      ),
      url(${EmailBg}) no-repeat center;
      background-size: cover;
      height: 450px;
      width: 100%;
      padding: 5rem calc((100vw - 1300px) /2);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 120px;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }
  p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
  form{
    z-index: 10;
  }
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    input{
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 0;
    }
  }
`
