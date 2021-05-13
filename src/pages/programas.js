import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import "../../src/components/layout.css"
import { MainContent } from "../components/styles/base"

const Programas = () => (
    <Layout>
        <SEO title="Programas" />
        <h1 className="programas" style={{ fontSize: "4.2rem" }}>
            {" "}
            Programas
        </h1>

        <MainContent></MainContent>
    </Layout>
)

export default Programas
