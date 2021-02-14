import React from 'react'
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa'
import {FooterContainer,SocialIcon,SocialLogo,SocialMedia,SocialMediaWrap,SocialIcons,WebsiteRights} from './FooterElements'
import Link from '../link';
import config from '../../../config/website';


const Footer = () => {

    let url_twitter = `${config.twitter}`
    let url_facebook = `${config.facebook}`

      return(
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                            <SocialIcon />
         
                    </SocialLogo>
    <WebsiteRights> Movimiento Por la Paz y la Vida | Dirección Nacional de Regiones, Seguimiento, Control y Evaluación de la Gestión • {new Date().getFullYear()}  
    </WebsiteRights>
   
                 
                  <SocialIcons>
                      <Link to={url_facebook} arial-label="Visit my Facebook">
                          <FaFacebook style={{color: '#fff' ,fontSize: '20px'}}/> 
                          </Link>

            <Link to={url_facebook} arial-label="Visit my Instagram">
                <FaInstagram style={{color: '#fff' ,fontSize: '20px'}} />
            </Link>

                      <Link to={url_twitter}  arial-label="Visit my Twitter">
           <FaTwitter style={{color: '#fff' ,fontSize: '20px'}} /> 
            </Link>

            </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
