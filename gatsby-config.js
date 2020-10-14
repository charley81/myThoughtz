module.exports = {
  siteMetadata: {
    title: "myThoughtz",
    description:
      "A personal site/blog when I can express myself, write articles, and have fun",
    author: "Chris Harley",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/component/layout.js"),
        },
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Architects Daughter", "cursive"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
  ],
}
