import React, { useState, useEffect } from 'react'
import logo from '../../images/mpv-logo.png'
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks,NavSecondary,NavMenuSecondary,NavLinkSecondary,NavLinksReponsive} from "./NavBarElements"
import { FaSearch } from 'react-icons/fa'

export default function NavBar() {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
      
            window.addEventListener("scroll",changeNav) 
        
    }, [])
    return (
        <>

            <IconContext.Provider value={{color: "#141414"}}>
   <NavSecondary active={scroll} click={click}> 
                        <NavbarContainer>
                          <NavMenuSecondary>
                              <NavLinkSecondary to='/gbmp' active={scroll} >
                                  Grandes Bases de Paz
                              </NavLinkSecondary>
                           <NavLinkSecondary to="/eda" active={scroll}>
                                 Ejes de Acción
                              </NavLinkSecondary>
                             <NavLinkSecondary to="/biblioteca/" active={scroll}>
                                Biblioteca Digital
                              </NavLinkSecondary>
                                 <NavLinkSecondary to="/estadisticas" active={scroll}>
                                  Estadisticas
                              </NavLinkSecondary>
                          </NavMenuSecondary>
                        </NavbarContainer>
                    </NavSecondary>
                <Nav active={scroll} click={click}>
            <NavbarContainer>
                <NavLogo to="/">
                  
                    <img src={logo} alt={logo}
                         css={`
                         width: auto;
                         height: 70px;
                        @media screen and (max-width: 920px){
                          width: auto;
                          height: 60px;
                          margin-left: 2.3rem;
                          }
                        `}
                    />
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click? <FaTimes/> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">Inicio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/blog">Noticias</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/programas">Programas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/nosotros">Nosotros</NavLinks>
                    </NavItem>
                    {/*<NavItem>
                                   <NavLinks to="/programas">Programas</NavLinks>
                    </NavItem>
                  <NavItem>
                        <NavLinks to="/eda">Ejes de Acción</NavLinks>
                    </NavItem>
  <NavItem>
            <NavLinks to="/eda">Biblioteca Digital</NavLinks>
                    </NavItem>


                    <NavItem>
                        <NavLinks to="/estadisticas">Estadisticas</NavLinks>
                    </NavItem>*/}
                    <NavItem>
                        <NavLinks to="/search"><FaSearch/></NavLinks>
                    </NavItem>
                        <NavLinksReponsive to="/gbmp">
                            Grandes Bases de Paz
                        </NavLinksReponsive>
                          <NavLinksReponsive to="/eda">
                            Ejes de Acción
                        </NavLinksReponsive>
                        <NavLinksReponsive to="/biblioteca/">
                            Biblioteca Digital
                        </NavLinksReponsive>
                      <NavLinksReponsive to="/estadisticas"
                          css={`
                          @media screen and (max-width: 960px){
                         padding-bottom: 30px;
                         }
                          `}
                          >
                            Estadisticas
                        </NavLinksReponsive>
                   
                     </NavMenu> 
            </NavbarContainer>

                </Nav>
             
            </IconContext.Provider>
    
                </>
    )
}
