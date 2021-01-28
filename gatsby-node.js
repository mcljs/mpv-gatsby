const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const striptags = require(`striptags`)
const lunr = require(`lunr`)
const { GraphQLJSONObject } = require("graphql-type-json")

// To add the slug flied to each post

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
 }
}

exports.createPages = ({graphql,actions}) => {
  const {createPage } = actions

  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
            image{
              id
            }
          }
          timeToRead
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({node,next,previous}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        }
      })
    })

    // const postsPorPage = 6

    // const numPages = Math.ceil(posts.length / postsPorPage)

    // Array.from({length: numPages}).forEach((_,index) =>{

    //   createPage({
    //     path: index === 0 ? `/blog` :`/blog/${index + 1}`,
    //     component: path.resolve(`./src/pages/blog.js`),
    //     context: {
    //       limit: postsPorPage,
    //       skip: index * postsPorPage,
    //       numPages,
    //       currentPage: index + 1,
    //     },

    //   })
      
    // })
  })
}

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const blogNodes = context.nodeModel.getAllNodes({
            type: `MarkdownRemark`,
          })
          const type = info.schema.getType(`MarkdownRemark`)
          return createIndex(blogNodes, type, cache)
        },
      },
    },
  })
}



const createIndex = async (blogNodes, type, cache) => {
  const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }
  const documents = []
  const store = {}
  // iterate over all posts
  for (const node of blogNodes) {
    const { slug } = node.fields
    const title = node.frontmatter.title
    const [html, excerpt] = await Promise.all([
      type.getFields().html.resolve(node),
      type.getFields().excerpt.resolve(node, { pruneLength: 40 }),
    ])
    // once html is resolved, add a slug-title-content object to the documents array
    documents.push({
      slug,
      title: node.frontmatter.title,
      content: striptags(html),
    })

    store[slug] = {
      title,
      excerpt,
    }
  }
  const index = lunr(function() {
    this.ref("slug")
    this.field("title")
    this.field("content")
    for (const doc of documents) {
      this.add(doc)
    }
  })

  const json = { index: index.toJSON(), store }
  await cache.set(cacheKey, json)
  return json
}
