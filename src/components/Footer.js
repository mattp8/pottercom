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
    flexDirection="column"
    css={{ position: 'fixed', width: '100%', bottom: '0' }}
    {...props}
  >
    <Text color="#ffffff" fontSize={1}>
      Made with{' '}
      <span aria-label="heart" role="img">
        ❤️
      </span>
      by <Link href="https://www.finimize.com?ref=pottercom">Finimize</Link>
    </Text>
    <Text mt="4px" color="#C0CCDA" fontSize={0}>
      We use{' '}
      <Link small href="https://www.finimize.com/wp/privacy-policy/">
        cookies
      </Link>{' '}
      & pumpkin pasties to make our Pottercom work
    </Text>
  </Flex>
);

export default Footer;

const Link = styled.a`
  color: ${props => props.color || '#00b2ff'};
  text-decoration: none;
  font-size: ${props => (props.small ? '13px' : '16px')}
  transition: 100ms ease;

  :hover {
    color: #00b2ff;
  }
`;
