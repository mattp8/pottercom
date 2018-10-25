import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Clipboard from 'react-clipboard.js';
import Fade from 'react-reveal/Fade';
import ReactHowler from 'react-howler';

import { Flex, Text, Card } from 'rebass';

import Layout from '../components/Layout';
import MascotSrc from '../assets/images/mascot.png';
import BoltSVG from '../assets/images/bolt';
import PotterTheme from '../assets/music/pottertheme.mp3';
import PotterHat from '../assets/images/potter-hat.png';

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      color: '#000000',
      buttonText: 'Copy',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCopySuccess = this.onCopySuccess.bind(this);
  }

  componentDidMount() {}

  onCopySuccess() {
    this.setState({ buttonText: 'Copied' });
    setTimeout(() => {
      this.setState({ buttonText: 'Copy' });
    }, 2000);
  }

  handleChange(e) {
    if (e.target.value.length > 7) {
      return;
    }
    this.setState({ color: e.target.value });
  }

  render() {
    const { color, buttonText } = this.state;
    const code = `<script>var potterconfig = { color:${color};}</script>
    <script src="https://cdn.jsdelivr.net/gh/mattp8/pottercom.js@1.0/src/index.js" />`;

    return (
      <Layout>
        <ReactHowler src={PotterTheme} playing />
        <Flex justifyContent="center" mt={5}>
          <Flex width={[1 / 2]} justifyContent="center">
            <Mascot src={MascotSrc} alt="Pottercom wizard" />
          </Flex>
          <Flex
            width={[1 / 2]}
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Fade bottom cascade delay={1200}>
              <ChatBubble>
                <Text color="black" textAlign="left">
                  Hey there. Stuck for costume ideas? Just paste the little
                  snippet of code below, after your Intercom code and watch the
                  magic happen.{' '}
                </Text>
              </ChatBubble>

              <Flex
                alignItems="center"
                flexDirection="column"
                mt={3}
                p={3}
                bg="offWhite"
                width="100%"
                css={{
                  borderRadius: '6px',
                  height: 'auto',
                  maxWidth: '350px',
                  boxSizing: 'border-box',
                }}
              >
                <Card
                  css={{ textAlign: 'left' }}
                  variant="lightGrey"
                  borderRadius="4px!important"
                  p={3}
                  width="100%"
                >
                  <Code>{code}</Code>
                </Card>

                <Flex width={[1]} mt={3} flexDirection={['column', 'row']}>
                  <CopyInput>
                    <Input
                      name="color"
                      value={color}
                      onChange={this.handleChange}
                    />
                    <BoltSVG fill={color} />
                  </CopyInput>
                  <Clipboard
                    data-clipboard-text={code}
                    onSuccess={this.onCopySuccess}
                    component={Copy}
                    className="copyButton"
                  >
                    {buttonText}
                  </Clipboard>
                </Flex>
              </Flex>
            </Fade>
          </Flex>
        </Flex>
        <noImage src={PotterHat} width="0" />
      </Layout>
    );
  }
}

export default IndexPage;

const float = keyframes`
	0% {
    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.6));		transform: translatey(0px);
	}
	60% {
    filter: drop-shadow(0 5px 30px rgba(0,0,0,0.3))	;	transform: translatey(-20px);
	}
	100% {
    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.6));		transform: translatey(0px);
  }`;

const Mascot = styled.img`
  width: 350px;
  height: 100%;
  animation: ${float} 6s infinite ease-in-out;
`;
const ChatBubble = styled.div`
  color: ${props => props.theme.colors.black};
  display: flex;
  max-width: 100%;
  alignitems: center;
  padding: ${props => `${props.theme.space[3]}px`};
  background: ${props => props.theme.colors.offWhite};
  border-radius: 6px;
  height: auto;
  max-width: 350px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 20px;
    border-color: transparent transparent
      ${props => props.theme.colors.offWhite} transparent;

    margin-left: -10px;
    z-index: -1;
  }
`;

const Code = styled.code`
  text-align: left;
  font-size: 1em;
  font-family: ${props => props.theme.font.family.default};
  color: ${props => props.theme.colors.lightBlack};
  max-width: 60%;
  word-break: break-word;
  width: 100%;
`;

const CopyInput = styled.div`
  display: flex;
  flex: 1;
  align-item: center;
  padding: ${props => `${props.theme.space[3]}px`};
  background: ${props => props.theme.colors.grey};
  border-radius: 4px;
  width: 100%;
  margin-right: 16px;

  @media (max-width: 640px) {
    margin-bottom: 8px;
  }
`;

const noImage = styled.img`
  display: none;
  width: 0;
  height: 0;
  z-index: -1;
`;

const Input = styled.input`
  background: transparent;
  color: ${props => props.theme.colors.lightBlack};
  border-radius: 6px;
  padding: 0px;
  box-shadow: none;
  border: none;
  display: flex;
  flex-grow: 1;
  font-size: 1em;
  outline: none;
  transition: 200ms ease;
  width: 100%;
`;

const Copy = styled.button.attrs({
  className: 'copyButton',
})`
  background: ${props => props.theme.colors.grey};
  font-size: 1em;
  font-weight: 500;
  border-radius: 4px;
  padding: ${props => `${props.theme.space[3]}px`};
  border: 0;
  cursor: pointer;
  transition: 200ms ease;

  :hover {
    background: ${props => props.theme.colors.greyHover};
  }

  :focus,
  active {
    outline: none;
    border: none;
  }
`;
