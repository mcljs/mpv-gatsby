import React from 'react'; 
import './HeroSection.css';
import { FaTwitter} from 'react-icons/fa'
import {Button} from '../ButtonElements'
import {SocialIconLink} from '../Footer/FooterElements'

function HeroSection(){
    return(
        <div className="hero-container">
            <h1>Movimiento Por la Paz y la Vida</h1>
         
            <div className="hero-btns">
            <Button fontBig big primary>
            <SocialIconLink href="https://twitter.com/DPazYVida3" target="_blank" rel="twitter" style={{textDecoration: 'none',color: '#fff',fontFamily: 'sans-serif'}}>
        SIGUENOS @
      </SocialIconLink>
                 <FaTwitter style={{textAlign: 'right'}}></FaTwitter>
            </Button>
            </div>
        </div>
    )
    }

    export default HeroSection;
