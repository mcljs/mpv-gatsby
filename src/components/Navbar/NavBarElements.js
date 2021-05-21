import styled from 'styled-components';
import {DiScala} from "react-icons/di"
import { Link } from 'gatsby';

export const Nav = styled.nav`
 background: ${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.9)0%, rgba(255,255,255,0)100% )"};
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 999;

@media scree and (max-width: 960px){
    background: ${({click}) => (click ? "fff": "transparent")};
    transition: 0.8s all ease;
} 
`

export const NavSecondary = styled.nav`
background: ${({active}) => active ? "#e41e25" :"linear-gradient(to bottom, rgba(255,255,255,0.9)0%)" };
margin-top: -40px;
 height: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 75px;
 z-index: 999;

@media screen and (max-width: 960px){
height: 10px;

    }

`



export const NavbarContainer = styled.div`
display: flex;
padding-left: 6rem;
justify-content: space-between;

z-index: 1;
width: 100%;
@media screen and (max-width: 960px){
padding-left: 0rem;

    }
`

export const NavLogo = styled(Link)`
color: #141414;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(DiScala)`
margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
 display: none;

 @media screen and (max-width: 960px) {
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
 }
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-left: 240px;


@media screen and (max-width: 960px) {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({click}) => (click ? "100%": "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
    overflow-y: scroll
}
`

export const NavMenuSecondary = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;




  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkSecondary = styled(Link)`
 color: ${({active}) => active ? "#fff" : "transparent"};
 visibility: ${({active}) => active ? "visible" : "hidden"};
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 119px;
  text-decoration: none;
  padding: 0rem;
  height: 100%;
  cursor: pointer;

    &:hover {
        color: #141414;
        text-decoration: none;
        transition: all 0.2s ease;
    }
  &.active {
    color: #15cdfc;
  }

@media screen and (max-width: 960px){
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover {
        color: #ff4040;
        transition: all 0.3s ease;
    }
}
`;

export const NavItem = styled.li`
height: 80px;


@media screen and (max-width:960px){
    width: 100%;
}
`

export const NavLinks = styled(Link)`
color: #141414;
text-decoration: none; 
display: flex;
align-items: center;
padding: 0.5rem 1rem;
height: 100%;
font-family: "Ubuntu", sans-serif;

   &:hover {
        color: #ff4040;
        text-decoration: none;
        transition: all 0.3s ease;
    }


@media screen and (max-width: 960px){
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover {
        color: #ff4040;
        transition: all 0.3s ease;
    }
}
`

export const NavLinksReponsive = styled(Link)`
 content: "\f2bd";
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 1.125em;
  vertical-align: middle;
  padding: 0 5px;
  visibility: hidden;



@media screen and (max-width: 960px){
    font-family: "Ubuntu", sans-serif;
    color: #fff;
    background-color: #e41e25;
    border-bottom: 1px solid #fff;
    text-align: center;
    visibility: visible;
    width: 100%;
    padding: 1.3rem;
    display: table;
    font-size: 1rem;
    &:hover {
        color: #fff;
        transition: all 0.3s ease;
    }
}

`
