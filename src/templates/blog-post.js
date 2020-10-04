import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import * as S from '../components/styles/base'
import RecommendedPosts from "../components/RecommendedPosts"

 const BlogPost = ({ data,pageContext}) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost


     return (
      <Layout>
      <SEO title={post.frontmatter.title} 
        image={post.frontmatter.image}/>
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de lectura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
         </Layout>
     )
 }





export const query = graphql`
query Post($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    fields {
      slug
    }
    frontmatter {
      title
      description
      date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
     image{
       absolutePath
     }
    }
    html
    timeToRead
  }
}

`

 export default BlogPost