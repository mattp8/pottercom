module.exports = {
  siteMetadata: {
    title: 'Pottercom | Fancy dress for your Intercom',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/favicon.png',
      },
    },
  ],
};
