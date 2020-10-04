import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchForm from "../components/search-form"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Oops Te equivocaste</h1>
    <p>Regresa al inicio</p>
    <SearchForm/>
  </Layout>
)

export default NotFoundPage
