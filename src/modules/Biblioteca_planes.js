import React from 'react'
import BookCard from '../components/biblioteca/BiblCard';
import HeaderPlanes from '../components/header_planes';
import Layout from '../components/layout';
import {BibliotecaDataPlanes} from '../components/biblioteca/BibliotecaData'
import SEO from '../components/Seo';





const BibliotecaPlanes = (  ) => {
    
    return(
  <Layout>
  <SEO title="Planes y Programas" />
    <HeaderPlanes/>
    <BookCard  Book={BibliotecaDataPlanes}
      publisher="Planes y Programas"
    />
  </Layout>
  );
}
export default BibliotecaPlanes
