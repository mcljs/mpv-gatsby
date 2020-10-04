// import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../components/layout';
// import '../../src/components/layout.css';
// import PostItem from '../components/PostItem';
// import SEO from "../components/seo"

//  const BlogList = props => {
//   const postList = props.data.markdownRemark.edges
//      return (
//       <Layout>
//       <SEO title="Blog" />
//               <h1 className="blog">blog</h1>
             
//               {postList.map(
//               ({
//                 node: {
//                   frontmatter: { background, category, date, description, title },
//                   timeToRead,
//                   fields: { slug },
//                 },
//               }) => (
//                 <PostItem
//                   slug={slug}
//                   background={background}
//                   category={category}
//                   date={date}
//                   timeToRead={timeToRead}
//                   title={title}
//                   description={description}
//                 />
//               )
//             )}
       
//           </Layout>
//      )
//  }





// export const query = graphql`
// query PostList($skip: Int!, $limit: Int!) {
//   allMarkdownRemark(
//     sort: {fields: frontmatter___date, order: DESC}
//     limit: $limit
//     skip: $skip
//     ) {
//     edges {
//       node {
//         fields {
//           slug
//         }
//         frontmatter {
//           background
//           category
//           date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
//           description
//           title
//         }
//         timeToRead
//       }
//     }
//   }
// }

// `

 
//  export default BlogList