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
    <WebsiteRights> Movimiento Por la Paz y la Vida | Dirección Nacional de Estado • {new Date().getFullYear()}  
    </WebsiteRights>
   
                 
                  <SocialIcons>
                      <Link to={url_facebook} arial-label="Facebook">
                          <FaFacebook style={{color: '#fff' ,fontSize: '20px'}}/> 
                          </Link>

            <Link to={url_facebook} arial-label="Instagram">
                <FaInstagram style={{color: '#fff' ,fontSize: '20px'}} />
            </Link>

                      <Link to={url_twitter}  arial-label="Twitter">
           <FaTwitter style={{color: '#fff' ,fontSize: '20px'}} /> 
            </Link>

            </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
