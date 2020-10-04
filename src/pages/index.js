import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"


const IndexPage = () => {
 

  return(
  <Layout>
    <SEO title="Inicio" />
    <HeroSection />
    <Image />
 
    
  </Layout>
)
  }
export default IndexPage
