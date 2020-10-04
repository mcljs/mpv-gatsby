import React from 'react'
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa'
import {FooterContainer,SocialIcon,SocialIconLink,SocialLogo,SocialMedia,SocialMediaWrap,SocialIcons,WebsiteRights} from './FooterElements'

const Footer = () => {
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
            <SocialIconLink href="https://www.facebook.com/Movimiento-Por-La-Paz-y-La-Vida-1658143497798479" target="_blank"
            arial-label="Facebook">
                <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank"
            arial-label="Instagram">
                <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/DPazYVida3" target="_blank"
            arial-label="Twitter">
                <FaTwitter />
            </SocialIconLink>
            
            </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;