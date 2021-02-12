import React from 'react';
import styled from 'styled-components';
import Link from '../link'
import SoundWave from '../../images/sound-wave.svg'

function BibliotecaSeason({biblioteca,seccion,articulo}) {
 
  return (
    <SeasonContainer>
     
    
    <div css={{width: '100%'}}>
        <SeasonLink
                                       >
          <div
            css={{
              alignItems: 'center',
              display: 'flex',
          ':hover': {          
            textDecoration: 'none'
                    },
            }}
          >
            <div
              className="play-button"
              css={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundImage:
                  'linear-gradient(-213deg, #e41e25 0%, #e24 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                transition: '100ms ease-in-out',
             ':hover': {          
            textDecoration: 'none'
                    },

            
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
              >
             <polygon
                  fill="white"
                  fillRule="evenodd"
                  points="7 0 104 10 7 20"
                />
              </svg>
            </div>

            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <div
                  css={{
                    padding: '3px 6px',
                    backgroundColor: '#FFE8F2',
                    color: '#FF4094',
                    borderRadius: 3,
                    fontSize: 13,


                  }}
                >
                  NUEVO!
                </div>
                           <Seasonh2 >
                             {seccion}
                           </Seasonh2>
            </div>
          </div>
          <small css={{opacity: 0.7, fontSize: 13}}>
            {articulo} Articulo
          </small>
        </SeasonLink>
      </div>
      <div css={{position: 'relative', maxHeight: 280}}>
        <ul
          css={{
            maxHeight: 280,
            overflowY: 'auto',
            listStyleType: 'none',
            background: '#fafafa',
            margin: 0,
          }}
        >
  {biblioteca.map((biblioteca) =>(
      
             <li css={{margin: 0}}>
                <Link
                  to={biblioteca.url}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                     color: '#141414',
                    fontWeight: '20px',
                    fontSize: '10rem',
                    padding: 10,
                    background: 'transparent',
                    ':hover': {
                      background: 'white',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.05)',    color: 'rgb(87, 62, 222)',
                      textDecoration: 'none'
                    },
                  }}
                >
                  <small css={{opacity: 0.6, fontSize: 12, flexBasis: '3%'}}>
                    {biblioteca.number}
                                     </small>

                  <div
                    css={{
                      '.gatsby-image-wrapper': {maxWidth: 40, maxHeight: 40},
                      width: 40,
                      height: 40,
                      img: {margin: 0},
                      marginRight: 18,
                    }}
                  >
                  
                  </div>
  <Image
                    src={biblioteca.image}
                      alt={biblioteca.title}
                    />
                  <span
                    css={{
                      flexBasis: '100%',
                      fontSize: 16,
                  
                    }}
                  >
                    {biblioteca.title}
                  </span>
                </Link>
              </li>

 ))}
                                </ul>
     
                <div
          css={{
            bottom: 0,
            width: '100%',
            height: 20,
            position: 'absolute',
            zIndex: 5,
            backgroundImage:
              'linear-gradient(180deg, rgba(98%,98%,98%,0.00) 0%, rgb(98%, 98%, 98%) 100%)',
            borderBottom: '1px solid #f1f1f1',
          }}
        />
      </div>
      

    
          </SeasonContainer>
  )
}

export default BibliotecaSeason

const Image = styled.img`
   margin: 0 0.75rem 0 0.45rem;
   width: 3.7%;
   height: 30px;
   border-radius: 50%;


`

const SeasonContainer = styled.div`
        background: 'white';
        border-radius: 5;
        border: 1px solid #f1f1f1;
        margin-top: 1.5rem;
       

`
const SeasonLink = styled(Link)`
       display: flex;
       align-items: center;
       justify-content: space-between;
            background-image: url(${SoundWave});
            background-position: 100% 100%;
            background-repeat: no-repeat;
            width: 100%;
            text-decoration: none;
            padding: 1.5rem;

            &:hover {
              .play-button {
                transform: scale(1.15);
                transition: 150ms ease-in-out;
                background: transparent;
                border: 2px solid #5e31dc;
                fill: #5e31dc;
                polygon {
                  fill: #5e31dc;
                };
              };
            };


`

const Seasonh2 = styled.h2`
    margin: 0;
    text-decoration: none;
    color: #141414;

    &:hover {
    color: #141414;
       text-decoration: none;
        transition: all 0.3s ease;
    }

`
