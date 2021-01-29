import React from 'react'; 
import './HeroSection.css';
import { FaTwitter} from 'react-icons/fa'
import {Button} from '../ButtonElements'
import {SocialIconLink} from '../Footer/FooterElements'
import Link from '../link';
import config from '../../../config/website';

function HeroSection(){

   let url_twitter = `${config.twitter}`
    return(
        <div className="hero-container">
            <h1>Movimiento Por la Paz y la Vida</h1>
         
            <div className="hero-btns">
                <Link to={url_twitter}>
                    <Button fontBig big primary>
            <SocialIconLink rel="twitter" style={{textDecoration: 'none',color: '#fff',fontFamily: 'sans-serif'}}>
        SIGUENOS @
      </SocialIconLink>
                 <FaTwitter style={{textAlign: 'right'}}></FaTwitter>
            </Button>
                </Link>
            </div>
        </div>
    )
    }

    export default HeroSection;
