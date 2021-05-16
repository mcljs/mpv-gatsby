import React from "react"
import '../components/googleform.css'
import Layout from "../components/layout"
import SEO from "../components/Seo"
import DelayedFallback from "../components/DelayedFallback"


const Pacificadores = () => {


const isSSR = typeof window === "undefined"

  return(
  <Layout>
    <SEO title="Registro de Pacificadores" />

    <div className="container">

{!isSSR &&(
  <React.Suspense fallback={ <DelayedFallback/> }>
      <iframe className="responsive-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSeJRnF5K5Sdz7T90z7u7uNApLaocPprXKuRxB_1PVFZmo9f4g/viewform?embedded=true"><DelayedFallback/></iframe>
 </React.Suspense>
    )}
    </div>
  </Layout>
)}

export default Pacificadores
