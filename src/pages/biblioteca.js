import React from 'react';

import '../../src/components/layout.css'
import BibliotecaScreenG from '../modules/Biblioteca_index'
import {Router} from '@reach/router'
import BibliotecaScreen from '../modules/BibliotecaScreen'
import BibliotecaPlanes from '../modules/Biblioteca_planes';
import BibliotecaVivencia from '../modules/Biblioteca_vivencia'
import SEO from '../components/Seo'

const Ejes = () =>{




  return(
        <>
              <SEO title="Biblioteca Digital"/>
                           <Router>
                    

        <BibliotecaScreenG path="/biblioteca/general" />
              <BibliotecaScreen path="/biblioteca/:bibliotecaId"/>
              <BibliotecaPlanes path="/biblioteca/planes" />
              <BibliotecaVivencia path="biblioteca/vivencia"/>

      </Router>
        </>
   
)}

export default Ejes
