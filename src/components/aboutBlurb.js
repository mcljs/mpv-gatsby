import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../components/styles/styles.scss"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "img-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "img-8.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="row">
          <div className="inner-blurb">
            <div className="content">
              <h3>Grandes Bases Misiones de Paz</h3>
              
                <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <div className="btn-row">
                <Link to="/gbmp">Bases a Nivel Nacional</Link>
              </div>
            </div>
            <div className="images">
              <div className="top-right">
                <Img fluid={data.fist.childImageSharp.fluid} />
              </div>
              <div className="bottom-left">
                <Img fluid={data.flower.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
      
  )
}

export default AboutBlurb
