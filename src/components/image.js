import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import "./image.css"



const Image = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {nin: ["gatsby-icon","mpv-logo","img-1","img-2", "img-3", "img-8","img-9"]}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  ` )

  return(
    <div className="image-container">
        <h1 style={{textAlign: 'center'}}>Memo fotografico del Mes</h1>
        <div className="image-grid">
            {data.allFile.edges.map((image,key) =>(
                <Img key={key}
                className="image-item"
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('.'[0])}
                />
            ))} 

        </div>

    </div>

  )
}

export default Image