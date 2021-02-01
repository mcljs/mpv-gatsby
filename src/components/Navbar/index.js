import React, { useState, useEffect } from 'react'
import logo from '../../images/mpv-logo.png'
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks} from "./NavBarElements"
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
                <Nav active={scroll} click={click}>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon/>
                    <img src={logo} width='100px' height='70px' alt={logo}/>
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
                        <NavLinks to="/gbmp">Grandes Bases</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/nosotros">Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/programas">Programas</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to="/eda">Ejes de Acción</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/estadisticas">Estadisticas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/search/"><FaSearch/></NavLinks>
                    </NavItem>
                     </NavMenu>
            </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
