import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Box } from 'rebass';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import theme from '../theme';
import Pottercom from '../assets/images/pottercom.svg';
import OGbanner from '../assets/images/pottercom-og.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-size-adjust: 100%;
    background-color: ${props => props.theme.colors.darkBlack};
   font-family: "Avenir Next", Helevetica, Arial, sans-serif;
   box-sizing: border-box;

  }

  div {
    box-sizing: border-box;

  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            language
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Pottercom | Fancy dress for your Intercom',
            },
            {
              name: 'keywords',
              content: 'Pottercom, intercom, markets, halloween',
            },
          ]}
        >
          <html lang="en" />
          <title>VEED - Create, Edit & Share Videos Online for free</title>

          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://pottercom.netlify.com" />
          <meta
            property="og:title"
            content="Pottercom. Fancy dress for your Intercom"
          />
          <meta
            property="og:description"
            content="Pottercom makes your talkative pal smile! Give him a costume for halloween this year."
          />
          <meta property="og:image" content={OGbanner} />
          <meta property="og:image:url" content={OGbanner} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@finimize" />
          <meta name="twitter:creator" content="@finimize" />
          <meta property="og:url" content="https://pottercom.netlify.com" />
          <meta
            property="og:title"
            content="Pottercom. Fancy dress for your Intercom"
          />
          <meta
            property="og:description"
            content="Pottercom makes your talkative pal smile! Give him a costume for halloween this year."
          />
          <meta property="og:image" content={OGbanner} />
        </Helmet>

        <ThemeProvider theme={theme}>
          <Container>
            <Header logo={Pottercom} />

            <GlobalStyle />

            <Box is="main" flex={1}>
              {children}
            </Box>
          </Container>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Container = styled(Box)`
  max-width: 1024px;
  texta-lign: center;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 0 32px;
  }
`;
