import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image";
import "./image.css"



const Image = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter:{absolutePath: {regex: "/static/assets/img/galeria/"}} ) 
    {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(height:600,width:600)
          }
        }
      }
    }
  }
  ` )

  return(
    <div className="image-container">
        <h1 style={{textAlign: 'center'}}>Galería</h1>
        <div className="image-grid">
            {data.allFile.edges.map((image,key) =>(
                <GatsbyImage key={key}
                className="image-item"
                image={image.node.childImageSharp.gatsbyImageData}
                alt={image.node.base.split('.'[0])}
                />
            ))} 

        </div>

    </div>

  )
}

export default Image
