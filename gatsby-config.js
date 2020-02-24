module.exports = {
  siteMetadata: {
    title: "Title",
    description: "Desctiption"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-typescript",
      isTSX: true
    }
  ]
};
