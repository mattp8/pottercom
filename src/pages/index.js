import React, { Component } from 'react';
import styled from 'styled-components';
import { Image, Flex, Text, Card, Button } from 'rebass';

import Layout from '../components/Layout';

import Mascot from '../assets/images/mascot.png';

class IndexPage extends Component {
  constructor() {
    super();
    this.state = { color: '#000000' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value.length > 7) {
      return;
    }
    this.setState({ color: e.target.value });
  }

  render() {
    const { color } = this.state;
    return (
      <Layout>
        <Flex justifyContent="center" mt={5}>
          <Flex width={[1 / 2]} justifyContent="center">
            <Image
              src={Mascot}
              height="100%"
              width="350px"
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
              css={{ borderRadius: '6px', height: 'auto' }}
            >
              <Text color="black" textAlign="left">
                Hey there. Stuck for costume ideas? Just paste the little
                snippet of code below, after your Intercom code and watch the
                magic happen.{' '}
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              flexDirection="column"
              mt={3}
              p={3}
              bg="offWhite"
              css={{ borderRadius: '6px', height: 'auto' }}
            >
              <Card
                css={{ textAlign: 'left' }}
                variant="lightGrey"
                borderRadius="4px!important"
                p={3}
              >
                <Code>{`var potterconfig = { color:#000000;}
                  <script src=“stackpath.finimize.com/pottercom”  defer=“true”  />`}</Code>
              </Card>

              <Flex width={[1]} mt={3}>
                <Flex bg="grey" css={{ flex: 1, borderRadius: '4px' }}>
                  <Input
                    name="color"
                    value={color}
                    onChange={this.handleChange}
                  />
                </Flex>
                <Button
                  bg="grey"
                  fontWeight="500"
                  borderRadius="4px"
                  px={4}
                  color="lightBlack"
                  ml={3}
                >
                  Copy
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    );
  }
}

export default IndexPage;

const Code = styled.code`
  text-align: left;
  font-size: 1em;
  font-family: ${props => props.theme.font.family.default};
  color: ${props => props.theme.colors.lightBlack};
`;

const Input = styled.input`
  background: transparent;
  color: ${props => props.theme.colors.lightBlack};
  border-radius: 6px;
  padding: 16px;
  box-shadow: none;
  border: none;
  display: flex;
  flex-grow: 1;
  font-size: 1em;
  outline: none;
`;
