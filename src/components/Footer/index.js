import React from 'react'
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa'
import {FooterContainer,SocialIcon,SocialIconLink,SocialLogo,SocialMedia,SocialMediaWrap,SocialIcons,WebsiteRights} from './FooterElements'
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
    <WebsiteRights> Movimiento Por la Paz y la Vida | Dirección Nacional de Estado • {new Date().getFullYear()}  
    </WebsiteRights>
   
                 
                  <SocialIcons>
                      <Link to={url_facebook}>
                          <SocialIconLink 
            arial-label="Facebook">
                <FaFacebook />
            </SocialIconLink>
                          </Link>

            <SocialIconLink 
            arial-label="Instagram">
                <FaInstagram />
            </SocialIconLink>
                      <Link to={url_twitter}>
                          <SocialIconLink 
            arial-label="Twitter">
                <FaTwitter />
            </SocialIconLink>
            </Link>

            </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
