import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/Seo'
import * as S from '../components/styles/base'
import RecommendedPosts from "../components/RecommendedPosts"
import Share from '../components/Share'

 const BlogPost = ({ data,pageContext,title,twitterHandle}) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost



     return (
      <Layout>
      <SEO title={post.frontmatter.title}
        description={post.frontmatter.description}
        //image={post.frontmatter.image}
        image={`https://movimientoporlapazylavida.netlify.app${post.frontmatter.image?.publicURL}`}
        />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} 
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <Share
          url={`https://movimientoporlapazylavida.tk${post.fields.slug}`}
title={title}
      twitterHandle={twitterHandle}
        />
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
       publicURL
            }
    }
    html
    timeToRead
  }
}

`

 export default BlogPost
