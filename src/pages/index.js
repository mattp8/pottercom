import React from 'react';
import styled from 'styled-components';
import { Image, Flex, Text, Card } from 'rebass';

import Layout from '../components/Layout';

import Mascot from '../assets/images/mascot.png';

const IndexPage = () => (
  <Layout>
    <Flex justifyContent="center" mt={5}>
      <Flex width={[1 / 2]} justifyContent="center">
        <Image
          src={Mascot}
          height="100%"
          width="300px"
          alt="Pottercom wizard"
        />
      </Flex>
      <Flex
        width={[1 / 2]}
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          p={3}
          bg="offWhite"
          css={{ borderRadius: '8px', height: 'auto' }}
        >
          <Text color="black" textAlign="left">
            Hey there. Stuck for costume ideas? Just paste the little snippet of
            code below, after your Intercom code and watch the magic happen.{' '}
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          mt={3}
          p={3}
          bg="offWhite"
          css={{ borderRadius: '8px', height: 'auto' }}
        >
          <Card css={{ textAlign: 'left' }} variant="lightGrey" p={3}>
            <Code>{`var potterconfig = { color:#000000;}
              <script src=“stackpath.finimize.com/pottercom”  defer=“true”  />`}</Code>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default IndexPage;

const Code = styled.code`
  text-align: left;
  font-size: 1em;
  font-family: ${props => props.theme.font.family.default};
  color: ${props => props.theme.colors.lightBlack};
`;
