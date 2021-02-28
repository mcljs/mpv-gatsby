import React,{Suspense,lazy} from 'react';

import '../../src/components/layout.css'
import BibliotecaScreenG from '../modules/Biblioteca_index'
import {Router} from '@reach/router'

//import BibliotecaScreen from '../modules/BibliotecaScreen'
//import BibliotecaPlanes from '../modules/Biblioteca_planes';
//import BibliotecaVivencia from '../modules/Biblioteca_vivencia'
import SEO from '../components/Seo'
const BibliotecaScreen = lazy(()=> import('../modules/BibliotecaScreen'));
const BibliotecaPlanes = lazy(()=> import('../modules/Biblioteca_planes'));
const BibliotecaVivencia = lazy(()=> import('../modules/Biblioteca_vivencia'));

const Ejes = () =>{




  return(
        <>
              <SEO title="Biblioteca Digital"/>
             
              <Router>
             <Suspense fallback={<div>Cargando...</div>}>
        <BibliotecaScreenG path="/biblioteca/general" />
              <BibliotecaScreen path="/biblioteca/:bibliotecaId"/>
              <BibliotecaPlanes path="/biblioteca/planes" />
              <BibliotecaVivencia path="biblioteca/vivencia"/>
              </Suspense>
      </Router>
                  </>
   
)}

export default Ejes
