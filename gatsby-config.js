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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Architects Daughter", "cursive"],
        },
      },
    },
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/component/layout.js"),
        },
      },
    },
  ],
}
