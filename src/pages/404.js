import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Flex, Text } from 'rebass';
import Layout from '../components/Layout';

import Sign from '../assets/images/sign.svg';

const NotFoundPage = () => (
  <Layout>
    <Flex justifyContent="center" flexDirection="column">
      <Helmet>
        <title>Sorry wrong station | Page not found</title>
      </Helmet>

      <Head my={3}>Sorry the train does not stop at this platform</Head>
      <Text color="#f7f7f7" textAlign="center" mt={3}>
        Please exit at the next station <StyledLink to="/">here</StyledLink>
      </Text>
      <SignImg src={Sign} alt="page not found" />
    </Flex>
  </Layout>
);

export default NotFoundPage;

const Head = styled.h1`
  color: #fff;
  max-width: 450px;
  margin: 0 auto;
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
`;

const SignImg = styled.img`
  width: 200px;
  height: auto;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  color: #00b2ff;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: 200ms ease;
  padding-top: 16px;

  :hover {
    transform: scale(1.05);
  }
`;
