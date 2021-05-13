import React from "react"
import '../components/googleform.css'
import Layout from "../components/layout"
import SEO from "../components/Seo"


const Pacificadores = () => (
  <Layout>
    <SEO title="Registro de Pacificadores" />

    <div className="container">
      <iframe className="responsive-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSeJRnF5K5Sdz7T90z7u7uNApLaocPprXKuRxB_1PVFZmo9f4g/viewform?embedded=true">Cargando…</iframe>
    </div>
  </Layout>
)

export default Pacificadores
