import React from 'react';

import '../../src/components/layout.css'
import BibliotecaScreenG from '../modules/Biblioteca_index'
import {Router} from '@reach/router'
import BibliotecaScreen from '../modules/BibliotecaScreen'
const Ejes = () =>{




  return(
  
      
        <Router>
        <BibliotecaScreenG path="/biblioteca/general" />
              <BibliotecaScreen path="/biblioteca/:bibliotecaId"/>
      </Router>
       
   
)}

export default Ejes
