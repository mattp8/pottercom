import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text } from 'rebass';

const Header = ({ logo }) => (
  <Text textAlign="center">
    <Image src={logo} width="200px" alt="pottercom" mt={4} />
    <Text
      color="lightBlack"
      fontWeight="500"
      fontSize={0}
      css={{ position: 'relative', left: '12px', top: '-12px' }}
      my={0}
    >
      Fancy dress for your Intercom
    </Text>
  </Text>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
