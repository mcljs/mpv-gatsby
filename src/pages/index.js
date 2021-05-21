import React from "react"

import Layout from "../components/layout"

import SEO from "../components/Seo"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import Email from '../components/Email'
import Stats from '../components/Stats';
import Articles from "../components/Articles"

const IndexPage = () => {
 

  return(
  <Layout>
    <SEO title="Inicio" />
  
      <HeroSection />
    <Articles />
    <Image />
    <h1 > </h1> 
    <Stats />
    <Email />

  </Layout>
)
  }
export default IndexPage
