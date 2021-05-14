import React from 'react'
import { StaticQuery, graphql} from "gatsby";
import { Link } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';

export const Section = styled.section`
 padding-left: 3rem;
padding-right: 3rem;
	padding-top: 1rem;
padding-bottom: 1rem;

@media scree and (max-width: 960px){
   } 
`

export const Card = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
margin-top: 3rem;
margin-bottom: 3rem;
column-gap: 6rem;
row-gap: 3rem;
border-radius: .25rem;
box-shadow: 0 0 0.25rem rgba(0,0,0,.08), 0 0.5rem 0.75rem rgba(0,0,0,.14);

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const CardGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
padding-top: 3rem;
padding-bottom: 3rem;
column-gap: 6rem;
row-gap: 2rem;

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }

`

export const CardShadow = styled.div`
border-radius: .25rem;
    box-shadow: 0 0 0.25rem rgba(0,0,0,.08), 0 0.5rem 0.75rem rgba(0,0,0,.14);

 @media screen and (max-width: 768px){

  }
`

export const ParrafoGridOne = styled.p`
color: #e41e25;
margin-top: 1rem;
font-weight: 600;
font-size: 1.5rem;
line-height: 2rem;
     padding-left: 0.75rem;
padding-right: 0.75rem;

`
export const ParrafoGridTwo = styled.p`
color: #e41e25;
margin-top: 1rem;
font-size: 1rem;
line-height: 1.5rem;
padding-left: 0.75rem;
padding-right: 0.75rem;

padding-bottom: 1rem;
--tw-text-opacity: 1;
color: rgba(17, 24, 39, var(--tw-text-opacity));
`


export const TimeFechaGrid = styled.time`
padding-top: 1rem;
    color: #888;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1rem;
    display: inline-block;
     padding-left: 0.75rem;
padding-right: 0.75rem;

 @media screen and (max-width: 768px){
margin-top: 1rem;
margin-bottom: 0.50rem;
     padding-left: 0.75rem;
padding-right: 0.75rem;
  }
`

export const TimeFecha = styled.time`
padding-top: 1rem;
    color: #888;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1rem;
    display: inline-block;
 @media screen and (max-width: 768px){
margin-top: -3rem;
margin-bottom: 0.50rem;
     padding-left: 0.75rem;
padding-right: 0.75rem;
  }
`



export const H2 = styled.h2`

font-size: 1.5rem;
line-height: 2rem;
   margin-right: 2.75rem;
color: #e41e25;
 @media screen and (max-width: 768px){
     padding-left: 0.75rem;
padding-right: 0.75rem;
  }
`
export const P = styled.p`
padding-top: 5px;
margin-bottom: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
 margin-right: 2.75rem;
--tw-text-opacity: 1;
color: rgba(17, 24, 39, var(--tw-text-opacity));
 @media screen and (max-width: 768px){
     padding-left: 0.75rem;
padding-right: 0.75rem;
  }
`

export const PostLink = styled(Link)`

  text-decoration: none;

`


const Articles = (  ) => {
 

  return(
      <>
      
        <Section>
  
      
          

      <StaticQuery
        query={graphql`
          {
          featuredPost:allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC},limit: 1) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        description
   date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
        image {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 600, quality: 100, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid            }
          }
        }
      }
    }
  }
            allPosts:allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC},limit: 3,skip:1) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        description
   date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
        image {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 350, quality: 100, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid            }
          }
        }
      }
    }
  }

          }
        `}
        render={({ featuredPost, allPosts }) => (
          <>
            <Card>
                        <Img
                imgStyle={{ objectFit: "cover" }}
                fluid={
                  featuredPost.nodes[0].frontmatter.image
                    .childImageSharp.fluid
                }
                className="rounded"
              />


              <div>
                <TimeFecha> {featuredPost.nodes[0].frontmatter.date}
</TimeFecha>
<PostLink to={featuredPost.nodes[0].fields.slug}>
                <H2 className="text-2xl font-semibold dark:text-white">
                  {featuredPost.nodes[0].frontmatter.title}
                </H2>
            </PostLink>
                <P className="text-lg text-gray-600 py-4 dark:text-[#becde3]">
                  {featuredPost.nodes[0].frontmatter.description}
                </P>


               
              </div>
            </Card>

            <CardGrid className="grid  grid-cols-1 md:grid-cols-3 py-12 gap-x-24 gap-y-8">
              {allPosts.nodes.map((post, index) => (
                <CardShadow key={index}>
                  <Img
                    imgStyle={{ objectFit: "cover" }}
                    fluid={post.frontmatter.image.childImageSharp.fluid}
                    className="rounded"
                  />

   <TimeFechaGrid> {post.frontmatter.date}
</TimeFechaGrid>
<PostLink to={post.fields.slug}>

                  <ParrafoGridOne className="text-2xl mt-4 font-semibold dark:text-white">
                    {post.frontmatter.title}
                  </ParrafoGridOne>
</PostLink>
                  <ParrafoGridTwo className="text-lg text-gray-600 py-4 dark:text-[#becde3]">
                    {post.frontmatter.description.substring(-1,170) }...
                  </ParrafoGridTwo>
                 
                </CardShadow>
              ))}
            </CardGrid>
          </>
        )}
      />
    </Section>
      </>

  );
}
export default Articles
