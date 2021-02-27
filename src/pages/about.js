import React from "react";
import { Link } from "gatsby";



const AboutPage = () => (
    <>
<h1 >About Page</h1>
  <ul>
  <li>
  <a href="/about">About</a> 
  </li>
  <li>
    <Link to="/" activeStyle={{color: 'red'}}>Home</Link>
  </li>
  <li>
    <Link to="/about" activeStyle={{color: 'red'}}>About</Link>
    <Link to="/nosotros" activeStyle={{color: 'red'}}>Nosotros</Link>
  </li>
</ul>
</>
)

export default AboutPage
