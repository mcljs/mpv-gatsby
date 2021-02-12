import React from "react"

import Layout from "../components/layout"

import SEO from "../components/Seo"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import Email from '../components/Email'

const IndexPage = () => {
 

  return(
  <Layout>
    <SEO title="Inicio" />
    <HeroSection />
    <h1> </h1>
    <Image />
    <h1> </h1> 
    <Email />
  </Layout>
)
  }
export default IndexPage
