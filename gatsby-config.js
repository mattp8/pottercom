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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-55650732-8',
        // Puts tracking script in the head instead of the body
        head: false,
        cookieDomain: 'pottercom.com',
      },
    },
  ],
};
