import React from 'react';
import {useStaticQuery,graphql} from 'gatsby'
import Layout from '../components/layout';
import '../../src/components/layout.css';
import PostItem from '../components/PostItem';
import SEO from "../components/Seo"




 
const Blog = props =>  {





  const {allMarkdownRemark} = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC},limit: 15) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
  
  `)

  const postList = allMarkdownRemark.edges

return(
    <Layout className="animate__animated animate__fadeIn" >
<SEO title="Blog" />
      <h1 className="blog animate__animated animate__fadeIn" style={{fontSize: '4.2rem'}} >Noticias</h1>
       
        {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  );
}
 
export default Blog;
 
