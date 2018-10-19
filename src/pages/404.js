import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Heading, Text } from 'rebass';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Box>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <Heading my={3}>Page not found</Heading>
      <Text is="p" my={3}>
        The requested page is unavailable.
      </Text>
    </Box>
  </Layout>
);

export default NotFoundPage;
