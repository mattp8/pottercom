import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const Footer = ({ children, ...props }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    py={3}
    fontSize={1}
    bg="black"
    css={{ position: 'fixed', width: '100%', bottom: '0' }}
    {...props}
  >
    <Text color="#ffffff" fontSize={0}>
      Made with{' '}
      <span aria-label="heart" role="img">
        ❤️
      </span>
      by <Link href="https://www.finimize.com?ref=pottercom">Finimize</Link>
    </Text>
  </Flex>
);

export default Footer;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  transition: 100ms ease;

  :hover {
    color: #00b2ff;
  }
`;
