module.exports = {
  siteMetadata: {
    title: `Movimiento por la Paz y la Vida`,
    description: `Movimiento por la Paz y la Vida`,
    author: `@mcljs` ,
    siteUrl: `https://movimientoporlapazylavida.netlify.app`
  },
  flags:{
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178999600-1",
        head: true,
        anonymize: true,
      },
    },
 {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://gmail.us7.list-manage.com/subscribe/post?u=f2b09504ccc94e655393cf34f&amp;id=000de9b5d6', 
        },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-social-cards`,
    // nned to be  the first to work with gatsby-remark-images

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Movimiento por la Paz y la Vida`,
        short_name: `Movimiento por la Paz y la Vida`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/mpv-logo.png`, // This path is relative to the root of the site.
      },
    },
  `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
